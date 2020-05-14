import React from 'react';
import { Link } from 'react-router-dom';


class PageTabs extends React.Component {
  state = { currentPage: '/' }

  isActiveTab(tabName) {
    return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
  }

  onTabClick(event, tabName) {
    this.setState({ currentPage: tabName })
  }

  render () {
    return (
      <ul className='nav page-tabs nav-tabs'>
        <li className='nav-item'>
          <Link className={this.isActiveTab('/')} to="/"
                onClick={event => this.onTabClick(event, '/')}>
            Account List
          </Link>
        </li>
        <li className='nav-item'>
          <Link className={this.isActiveTab('/page2')} to="/page2"
                onClick={event => this.onTabClick(event, '/page2')}>
            Transactions
          </Link>
        </li>
        <li className='nav-item'>
          <Link className={this.isActiveTab('/page3')} to="/page3"
                onClick={event => this.onTabClick(event, '/page3')}>
            Account Detail
          </Link>
        </li>
      </ul>
    )
  }

};

export default PageTabs;
