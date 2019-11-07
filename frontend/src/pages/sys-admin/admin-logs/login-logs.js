import React, { Component, Fragment } from 'react';
import { seafileAPI } from '../../../utils/seafile-api';
import { gettext, loginUrl, siteRoot } from '../../../utils/constants';
import { Utils } from '../../../utils/utils';
import EmptyTip from '../../../components/empty-tip';
import moment from 'moment';
import Loading from '../../../components/loading';
import Paginator from '../../../components/paginator';
import LogsNav from './logs-nav';
import MainPanelTopbar from '../main-panel-topbar';
import UserLink from '../user-link';


class Content extends Component {

  constructor(props) {
    super(props);
  }

  getPreviousPage = () => {
    this.props.getLogsByPage(this.props.currentPage - 1);
  }

  getNextPage = () => {
    this.props.getLogsByPage(this.props.currentPage + 1);
  }

  render() {
    const { loading, errorMsg, items, perPage, currentPage, hasNextPage } = this.props;
    if (loading) {
      return <Loading />;
    } else if (errorMsg) {
      return <p className="error text-center">{errorMsg}</p>;
    } else {
      const emptyTip = (
        <EmptyTip>
          <h2>{gettext('No Admin Login Logs.')}</h2>
        </EmptyTip>
      );
      const table = (
        <Fragment>
          <table className="table-hover">
            <thead>
              <tr>
                <th width="25%">{gettext('Name')}</th>
                <th width="25%">{gettext('IP')}</th>
                <th width="25%">{gettext('Status')}</th>
                <th width="25%">{gettext('Time')}</th>
              </tr>
            </thead>
            {items &&
              <tbody>
                {items.map((item, index) => {
                  return (<Item
                    key={index}
                    item={item}
                  />);
                })}
              </tbody>
            }
          </table>
          <Paginator
            gotoPreviousPage={this.getPreviousPage}
            gotoNextPage={this.getNextPage}
            currentPage={currentPage}
            hasNextPage={hasNextPage}
            canResetPerPage={true}
            curPerPage={perPage}
            resetPerPage={this.props.resetPerPage}
          />
        </Fragment>
      );
      return items.length ? table : emptyTip; 
    }
  }
}

class Item extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { item } = this.props;
    return (
      <tr onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <td><UserLink email={item.email} name={item.name} /></td>
        <td>{item.login_ip}</td>
        <td>{item.login_success ? gettext('Success') : gettext('Failed')}</td>
        <td>{moment(item.login_time).fromNow()}</td>
      </tr>
    );
  }
}

class AdminLoginLogs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      errorMsg: '',
      logList: [],
      perPage: 100,
      currentPage: 1,
      hasNextPage: false,
    };
    this.initPage = 1;
  }

  componentDidMount () {
    this.getLogsByPage(this.initPage);
  }

  getLogsByPage = (page) => {
    let { perPage } = this.state;
    seafileAPI.sysAdminListAdminLoginLogs(page, perPage).then((res) => {
      this.setState({
        logList: res.data.data,
        loading: false,
        currentPage: page,
        hasNextPage: Utils.hasNextPage(page, perPage, res.data.total_count),
      });
    }).catch((error) => {
      if (error.response) {
        if (error.response.status == 403) {
          this.setState({
            loading: false,
            errorMsg: gettext('Permission denied')
          });
          location.href = `${loginUrl}?next=${encodeURIComponent(location.href)}`;
        } else {
          this.setState({
            loading: false,
            errorMsg: gettext('Error')
          });
        }
      } else {
        this.setState({
          loading: false,
          errorMsg: gettext('Please check the network.')
        });
      }
    });
  }

  resetPerPage = (newPerPage) => {
    this.setState({
      perPage: newPerPage,
    }, () => this.getLogsByPage(this.initPage));
  }

  render() {
    let { logList, currentPage, perPage, hasNextPage } = this.state;
    return (
      <Fragment>
        <MainPanelTopbar />
        <div className="main-panel-center flex-row">
          <div className="cur-view-container">
            <LogsNav currentItem="adminLoginLogs" />
            <div className="cur-view-content">
              <Content
                loading={this.state.loading}
                errorMsg={this.state.errorMsg}
                items={logList}
                currentPage={currentPage}
                perPage={perPage}
                hasNextPage={hasNextPage}
                getLogsByPage={this.getLogsByPage}
                resetPerPage={this.resetPerPage}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AdminLoginLogs;
