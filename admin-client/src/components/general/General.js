import React, {Component} from 'react';
import { InputGroup, Input, Button, InputGroupText, Table, Pagination, PaginationItem, PaginationLink, Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'

import GeneralDetail from './GeneralDetail';

class General extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal : false
        }
    }

    toggle = () => this.setState({modal : !this.state.modal})

    pagination = (uri) => {
        alert("Go to Link " + uri)
    }

    render() {
        return (
            <>
            <div className = "container">
                <div className='general-title'>
                    <h2>일반 회원 관리</h2> 
                </div>
                <div className='general-title user-info'>
                    <b>[현재 접속/총 회원 : 1265/23568]</b>
                </div>
                <hr className='general-hr'/>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td className='user-state-select'>
                                <InputGroup>
                                    <InputGroupText>계정</InputGroupText>
                                    <select className="form-select" aria-label="Default select example">
                                        <option>전체</option>
                                        <option>일반</option>
                                        <option>휴면</option>
                                        <option>정지</option>
                                        <option>탈퇴</option>
                                    </select>
                                </InputGroup>
                            </td>
                            <td className='user-state-select'>
                                <InputGroup>
                                    <InputGroupText>접속</InputGroupText>
                                    <select className="form-select" aria-label="Default select example">
                                        <option>전체</option>
                                        <option>접속</option>
                                        <option>미접속</option>
                                    </select>
                                </InputGroup>
                            </td>
                            <td className='user-state-select'>
                                <InputGroup>
                                    <InputGroupText>구분</InputGroupText>
                                    <select className="form-select" aria-label="Default select example">
                                        <option>전체</option>
                                        <option>돌봄이</option>
                                        <option>카카오</option>
                                        <option>네이버</option>
                                        <option>구글</option>
                                    </select>
                                </InputGroup>
                            </td>
                            <td className = "date-select">
                                <InputGroup>
                                    <InputGroupText>가입 일자</InputGroupText>
                                    <Input type='date'>
                                    </Input>
                                </InputGroup> 
                            </td>
                            <td className = "date-select">
                                <InputGroup>
                                    <InputGroupText>최종 접속 일자</InputGroupText>
                                    <Input type='date'>
                                    </Input>
                                </InputGroup> 
                            </td>
                        </tr>
                        <tr>
                            <td colSpan = '5'>
                                <InputGroup>
                                    <InputGroupText>
                                        <Input id ="user-id" name ="search-filter" type = 'radio'></Input>
                                        <label className = "general-label" htmlFor ="#user-id"> ID </label>
                                        <Input id ="user-name" name ="search-filter" type = 'radio'></Input>
                                        <label className = "general-label" htmlFor ="#user-name"> 이름 </label>
                                    </InputGroupText>
                                    <Input></Input>
                                    <Button className='btn btn-info'>검색</Button>
                                </InputGroup>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <hr className='general-hr'/>
                <InputGroup>
                    <InputGroupText>정렬</InputGroupText>
                    <select className="form-select">
                        <option>가입 일자 순</option>
                        <option>이용 현황 순</option>
                        <option>최종 접속 일자 순</option>
                    </select>
                    <select className="form-select">
                        <option>오름차순</option>
                        <option>내림차순</option>
                    </select>
                </InputGroup>
                <hr className='general-hr'/>
                <Table striped bordered>
                    <thead className='table-dark'>
                        <tr>
                            <th>회원번호</th>
                            <th>ID</th>
                            <th>이름</th>
                            <th>전화번호</th>
                            <th>구분</th>
                            <th>계정</th>
                            <th>접속</th>
                            <th>이용 현황</th>
                            <th>가입 일자</th>
                            <th>최종 접속 일자</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td onClick={this.toggle}>1</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td onClick={this.toggle}>2</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>카카오</td>
                            <td>휴면</td>
                            <td>미접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td onClick={this.toggle}>3</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>구글</td>
                            <td>정지</td>
                            <td>접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td onClick={this.toggle}>4</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>네이버</td>
                            <td>탈퇴</td>
                            <td>미접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td onClick={this.toggle}>5</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td onClick={this.toggle}>6</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td onClick={this.toggle}>7</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td onClick={this.toggle}>8</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td onClick={this.toggle}>9</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td onClick={this.toggle}>10</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td onClick={this.toggle}>11</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td onClick={this.toggle}>12</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td onClick={this.toggle}>13</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td onClick={this.toggle}>14</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td onClick={this.toggle}>15</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>152</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                    </tbody>
                </Table>
                <div className="general-page-area">
                    <Pagination aria-label='Page navigation example'>
                        <PaginationItem>
                            <PaginationLink onClick = {e => this.pagination("first")} first/>
                        </PaginationItem>
                        <PaginationItem >
                            <PaginationLink onClick = {e => this.pagination("previous")} previous/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick = {e => this.pagination("1")}>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick = {e => this.pagination("2")}>2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick = {e => this.pagination("3")}>3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick = {e => this.pagination("4")}>4</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick = {e => this.pagination("5")}>5</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick = {e => this.pagination("6")}>6</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick = {e => this.pagination("7")}>7</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick = {e => this.pagination("8")}>8</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick = {e => this.pagination("9")}>9</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick = {e => this.pagination("10")}>10</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick = {e => this.pagination("next")} next/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick = {e => this.pagination("last")} last/>
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
            <Modal className = "general-modal" isOpen = {this.state.modal} fade = {true} toggle = {this.toggle}>
                <ModalHeader toggle = {this.toggle}>회원 상세</ModalHeader>
                <ModalBody><GeneralDetail/></ModalBody>
            </Modal>
            </>
        )
    }

}

export default General;