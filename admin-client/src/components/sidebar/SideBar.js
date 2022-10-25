import React, {Component} from "react";
import {UncontrolledCollapse, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function customLink({ data }) {
  return (
    <>
        {data.map((data) => (
            <Link to={data.path}>{data.name}</Link>
        ))}
    </>
  );
}

class SideBar extends Component {
  
  render() {
    return (
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4">돌봄이 관리자</span>
        </a>
        <hr/>
         <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <div id = "member-toggle" className="nav-link text-white">회원 관리</div>
            <UncontrolledCollapse toggler="#member-toggle">
              <Link className = "subMenu" to={'/general'}>일반 회원 관리</Link>
              <Link className = "subMenu" to={'/nurse'}>보호사 회원 관리</Link>
            </UncontrolledCollapse>
          </li>
          <li>
            <div id = "total-toggle" className="nav-link text-white">종합 현황</div>
            <UncontrolledCollapse toggler="#total-toggle">
              <Link className = "subMenu" to={'/join'}>가입 현황</Link>
              <Link className = "subMenu" to={'/use'}>일반 이용 현황</Link>
              <Link className = "subMenu" to={'/care'}>보호사 현황</Link>
            </UncontrolledCollapse>
          </li>
          <li>
            <div id = "content-toggle" className="nav-link text-white">컨텐츠 관리</div>
            <UncontrolledCollapse toggler="#content-toggle">
              <Link className = "subMenu" to={'/review'}>이용 후기 관리</Link>
              <Link className = "subMenu" to={'/diary'}>보호사 일지 관리</Link>
              <Link className = "subMenu" to={'/photo'}>사진 관리</Link>
            </UncontrolledCollapse>
          </li>
        </ul>
        <hr/>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to={'/logout'}>Sign out</Link></li>
          </ul>
        </div>
      </div>
    )
  }

}

export default SideBar;