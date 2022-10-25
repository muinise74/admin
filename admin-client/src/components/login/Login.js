import React, {Component} from 'react';
import {Table,Button} from 'reactstrap';

class Login extends Component {

    render() {
        return (
            <div className = "login-fullDiv">
                <div className = "login-area">
                    <form className = 'loginForm'>
                        <h3><b>LogIn</b></h3>
                        <Table striped hover>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td><input className = "admin-id" name = "id"/></td>
                                </tr>
                                <tr>
                                    <th>PW</th>
                                    <td><input type = "password" className = "admin-pw" name = "pw"/></td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className = "button-area">
                            <Button type = "submit" color = "primary">로그인</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Login;