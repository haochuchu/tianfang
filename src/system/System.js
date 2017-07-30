import React, { Component } from 'react';
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './system.css';
import './system_phone.css';
import Gold from './../gold/Gold';
import './../gold/gold.css';
import $ from 'jquery';

class System extends Component {
    constructor(){
        super();
        this.state={
            system:[],
            message:[],
            hot_line:[],
            con_img:[]
        };
    };
    componentDidMount(){
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/system",
            async:"true",
            success:function(pp){
                console.log(pp)
                this.setState({
                    system:pp
                })
                $(".db").click(function (){
                    (document.body.scrollTop=0) || (document.documentElement.scrollTop=0);
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/message",
            async:"true",
            success:function(ss){
                this.setState({
                    message:ss
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/hot_line",
            async:"true",
            success:function(ss){
                this.setState({
                    hot_line:ss
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/con_img",
            async:"true",
            success:function(ss){
                this.setState({
                    con_img:ss
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
        $(function(){
            $('.blocks').click(function(){
                $('body').animate({scrollTop:0},function(){
                    return false;
                })
            });
        })
        var backs=document.getElementById("backs");
        backs.onclick=function(){
            (document.body.scrollTop=0) || (document.documentElement.scrollTop=0);
        }
        document.addEventListener('scroll', this.handleScroll.bind(this));
    };
    handleScroll=function (e) {
        if(document.body.scrollTop>=0){
            document.getElementById("head").style.width='100vw';
            document.getElementById("head").style.background='#fff';
            document.getElementById("head").style.boxShadow='0 0 30px rgba(0,0,0,.1)';
            document.getElementById("img").style.marginTop='-80px';
            document.getElementById("nav").className='navs';
            
        }
        else{
            document.getElementById("head").style.width='100vw';
            document.getElementById("head").style.background='transparent';
            document.getElementById("head").style.boxShadow='';
            document.getElementById("img").style.marginTop='';
            document.getElementById("nav").className='nav';
        }
    };
    render(){
        return(
            <Router>
                <div>
                    <Route path="/Gold" component={Gold}></Route>
                    <Route exact path="/system" render={()=>(
                        <div className="wrap">
                            <div className="show_top"></div>
                            <div className="show_bottom" id="show_news"></div>
                            <div className="home_system" id="home"></div>
                            {/*content*/}
                            <div className="fixed_newss">
                                <h2 className="system_word pros">PRODUCTS</h2>
                                <ul className="system_box">
                                         {this.state.system.map(function(system,i){
                                                return <Link key={i}  to={`/Gold?${system.id}`}><li className="db">
                                                    <div className="system_tops">
                                                        <img src={system.system_img}/>
                                                    </div>
                                                    <div className="system_bots">
                                                        <h5>{system.system_word}</h5>
                                                        <span>{system.system_new}</span>
                                                    </div>
                                                </li></Link>
                                            })}
                                </ul>
                                <div className="contact_box">
                                        {this.state.con_img.map(function(foot,i){
                                            return (
                                                <div className="contact_tops">
                                                    <img src={foot.img} alt='' />
                                                </div>
                                            )
                                        })}
                                        <ul className="contact_ulw">
                                            {this.state.message.map(function(list,i){
                                                return <li><a><img src={list.imgs} alt='' /></a></li>
                                            })}
                                        </ul>
                                        <div className="contact_word">
                                            {this.state.hot_line.map(function(hot,i){
                                                return <div>
                                                    <h5>{hot.hot}</h5>
                                                    <h3 className="light">{hot.line}</h3>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                            </div>
                            <div className="Rt_top">
                                <p id="phones">
                                    <img src="images/phone.jpg" alt="" />
                                </p>
                                <p id="backs">
                                    <Link to="/"><img src="images/go_back.jpg" alt="" /></Link>
                                </p>
                                <p className="blocks">
                                    <img src="images/gotop.jpg" alt="" />
                                </p>
                            </div>
                        </div>
                    )}>
                </Route>
            </div>
        </Router>

        )
    }
}

export default System;