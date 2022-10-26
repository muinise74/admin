import React, {Component} from 'react'
import {Button, Table} from 'reactstrap'

class GeneralDetail extends Component {

    render() {
        return (
            <>
                <div><b>기본 정보</b></div>
                <div className="card mb-3 general-modal-card">
                    <div className="row g-0">
                        <div className="col-4">
                            <img src="https://blog.kakaocdn.net/dn/bAyJve/btqNr8wMiXi/rV0XKPT78iMnmkXlViEmk0/img.jpg" className="img-fluid rounded-start" alt="Card Image"/>
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">김 미키 회원<small className="text-muted">(회원번호 : 104)</small></h5>
                                <p>ID : <span>sample@sample.com</span></p>
                                <p>유형 : <span>일반</span></p>
                                <p>구분 : <span>카카오</span></p>
                                <p>TEl : <span>010-2543-4156</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div><b>세부 정보</b></div>
                <Table bordered>
                    <tbody>
                        <tr>
                            <th className = "table-secondary">가입일</th>
                            <td>2015-03-19</td>
                            <th className = "table-secondary">최근 방문</th>
                            <td>2022-10-24</td>
                        </tr>
                        <tr>
                            <th className = "table-secondary">방문 회수</th>
                            <td>173</td>
                            <th className = "table-secondary">신청 건수</th>
                            <td>89</td>
                        </tr>
                        <tr>
                            <th className = "table-secondary">결제 건수</th>
                            <td>85</td>
                            <th className = "table-secondary">결제 취소 건수</th>
                            <td>13</td>
                        </tr>
                        <tr>
                            <th className = "table-secondary">취소 건수</th>
                            <td>4</td>
                            <th className = "table-secondary">이용 건수</th>
                            <td>72</td>
                        </tr>
                        <tr>
                            <th className = "table-secondary">후기 수</th>
                            <td>72</td>
                            <th className = "table-secondary">사용 금액</th>
                            <td>10,350,000원</td>
                        </tr>
                    </tbody>
                </Table>
                <div><b>보호 대상자 정보</b></div>
                <div><p>총 3명의 보호 대상자 등록됨</p></div>
                <div className = "general-prot">
                    <div className="card mb-3 general-modal-card">
                        <div className="row g-0">
                            <div className="col-4">
                                <img src="https://blog.kakaocdn.net/dn/bAyJve/btqNr8wMiXi/rV0XKPT78iMnmkXlViEmk0/img.jpg" className="img-fluid rounded-start" alt="Card Image"/>
                            </div>
                            <div className="col-8">
                                <Table bordered>
                                    <tbody>
                                        <tr>
                                            <th className = "table-secondary">PNO</th>
                                            <td>105</td>
                                            <th className = "table-secondary">이름</th>
                                            <td>김 미화</td>
                                        </tr>
                                        <tr>
                                            <th className = "table-secondary">나이</th>
                                            <td>72세</td>
                                            <th className = "table-secondary">성별</th>
                                            <td>여성</td>
                                        </tr>
                                        <tr>
                                            <th className = "table-secondary">TEL</th>
                                            <td colSpan='3'>010-4288-4584</td>   
                                        </tr>
                                        <tr>
                                            <th className = "table-secondary">TEL2</th>
                                            <td colSpan='3'>010-4228-4514</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className='col-12'>
                                <Table bordered>
                                    <thead className = "table-secondary">
                                        <tr>
                                            <td>특이사항</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                말을 잘 못하십니다.
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "general-prot">
                    <div className="card mb-3 general-modal-card">
                        <div className="row g-0">
                            <div className="col-4">
                                <img src="https://blog.kakaocdn.net/dn/bAyJve/btqNr8wMiXi/rV0XKPT78iMnmkXlViEmk0/img.jpg" className="img-fluid rounded-start" alt="Card Image"/>
                            </div>
                            <div className="col-8">
                                <Table bordered>
                                    <tbody>
                                        <tr>
                                            <th className = "table-secondary">PNO</th>
                                            <td>105</td>
                                            <th className = "table-secondary">이름</th>
                                            <td>김 미화</td>
                                        </tr>
                                        <tr>
                                            <th className = "table-secondary">나이</th>
                                            <td>72세</td>
                                            <th className = "table-secondary">성별</th>
                                            <td>여성</td>
                                        </tr>
                                        <tr>
                                            <th className = "table-secondary">TEL</th>
                                            <td colSpan='3'>010-4288-4584</td>   
                                        </tr>
                                        <tr>
                                            <th className = "table-secondary">TEL2</th>
                                            <td colSpan='3'>010-4228-4514</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className='col-12'>
                                <Table bordered>
                                    <thead className = "table-secondary">
                                        <tr>
                                            <td>특이사항</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                말을 잘 못하십니다.
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "general-prot">
                    <div className="card mb-3 general-modal-card">
                        <div className="row g-0">
                            <div className="col-4">
                                <img src="https://blog.kakaocdn.net/dn/bAyJve/btqNr8wMiXi/rV0XKPT78iMnmkXlViEmk0/img.jpg" className="img-fluid rounded-start" alt="Card Image"/>
                            </div>
                            <div className="col-8">
                                <Table bordered>
                                    <tbody>
                                        <tr>
                                            <th className = "table-secondary">PNO</th>
                                            <td>105</td>
                                            <th className = "table-secondary">이름</th>
                                            <td>김 미화</td>
                                        </tr>
                                        <tr>
                                            <th className = "table-secondary">나이</th>
                                            <td>72세</td>
                                            <th className = "table-secondary">성별</th>
                                            <td>여성</td>
                                        </tr>
                                        <tr>
                                            <th className = "table-secondary">TEL</th>
                                            <td colSpan='3'>010-4288-4584</td>   
                                        </tr>
                                        <tr>
                                            <th className = "table-secondary">TEL2</th>
                                            <td colSpan='3'>010-4228-4514</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className='col-12'>
                                <Table bordered>
                                    <thead className = "table-secondary">
                                        <tr>
                                            <td>특이사항</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                말을 잘 못하십니다.
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "general-modal-btn-area">
                    <Button className = "btn btn-danger">회원 정지</Button>
                    <Button className = "btn btn-error">회원 탈퇴</Button>
                </div>
            </>
        ) 
    }

}

export default GeneralDetail;