import React, {Component} from 'react';
import { InputGroup, Input, Button, InputGroupText, Table, Pagination, PaginationItem, PaginationLink} from 'reactstrap'

class Nurse extends Component {

    pagination = (uri) => {
        alert("Go to Link " + uri)
    }

    render() {
        return (
            <div className = "container">
                <div className='nurse-title'>
                    <h2>보호사 회원 관리</h2> 
                </div>
                <div className='nurse-title user-info'>
                    <b>[현재 접속/총 보호사 : 1265/23568]</b>
                </div>
                <hr className='nurse-hr'/>
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
                                        <label className = "nurse-label" htmlFor ="#user-id"> ID </label>
                                        <Input id ="user-name" name ="search-filter" type = 'radio'></Input>
                                        <label className = "nurse-label" htmlFor ="#user-name"> 이름 </label>
                                    </InputGroupText>
                                    <Input></Input>
                                    <Button className='btn btn-info'>검색</Button>
                                </InputGroup>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <hr className='nurse-hr'/>
                <InputGroup>
                    <InputGroupText>정렬</InputGroupText>
                    <select className="form-select">
                        <option>가입 일자 순</option>
                        <option>진행 건수 순</option>
                        <option>예약 건수 순</option>
                        <option>평점 순</option>
                        <option>최종 접속 일자 순</option>
                    </select>
                    <select className="form-select">
                        <option>오름차순</option>
                        <option>내림차순</option>
                    </select>
                </InputGroup>
                <hr className='nurse-hr'/>
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
                            <th>진행 건수</th>
                            <th>예약 건수</th>
                            <th>평점</th>
                            <th>가입 일자</th>
                            <th>최종 접속 일자</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>카카오</td>
                            <td>휴면</td>
                            <td>미접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>구글</td>
                            <td>정지</td>
                            <td>접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>네이버</td>
                            <td>탈퇴</td>
                            <td>미접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>sample@sample.com</td>
                            <td>김미키</td>
                            <td>010-4128-2682</td>
                            <td>돌봄이</td>
                            <td>일반</td>
                            <td>접속</td>
                            <td>102</td>
                            <td>152</td>
                            <td>4.5</td>
                            <td>2022-03-16</td>
                            <td>2022-10-14</td>
                            <td className='btn-modify'><Button className='btn btn-light'>수정</Button></td>
                        </tr>
                    </tbody>
                </Table>
                <div className="nurse-page-area">
                    <Pagination aria-label='Page navigation example'>
                        <PaginationItem>
                            <PaginationLink onClick = {e => this.pagination("first")} first/>
                        </PaginationItem>
                        <PaginationItem >
                            <PaginationLink onClick = {e => this.pagination("previous")} previous/>
                        </PaginationItem>
                        <PaginationItem a>
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
        )
    }

}

export default Nurse;