import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './contact.css';
import './contact_phone.css';
import $ from 'jquery';

class Contact extends Component {
    constructor(){
        super();
        this.state={
            contact:[]
        };
        this.foot={"listAll":[{"list_img":"images/footer_icon_01.png"},{"list_img":"images/footer_icon_02.png"},{"list_img":"images/footer_icon_03.png"}]
        }
    };
	componentDidMount(){
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/contact",
            async:"true",
            success:function(ss){
                this.setState({
                    contact:ss
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
        //回到顶部
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
        var h=document.getElementById('home').offsetHeight-document.getElementById('head').offsetHeight;
        if(document.body.scrollTop>=h){
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
			<div className="wrap">
				<div className="show_top"></div>
                <div className="show_bottom" id="showsss"></div>
                <div className="home_contact" id="home"></div>

                {/*content*/}
                <div className="main_contact">
                    {/*contact*/}
                    <div className="contact">
                        {this.state.contact.map(function(foot,i){
                                return <div>
                                        <div className="contact_tops">
                                            <img src={foot.contact_img}/>
                                        </div>
                                        <div className="c_word">
                                            {foot.p_first}
                                        </div>
                                        <div className="c_box">
                                            <p>{foot.p_second}</p>
                                            <p>{foot.p_third}</p>
                                            <p>{foot.p_fourth}</p>
                                            <p>{foot.p_fivth}</p>
                                        </div>
                                </div>
                        })}
                        <ul className="contact_uls">
                            {this.foot.listAll.map(function(list,i){
                                return <li><a><img src={list.list_img}/></a></li>
                            })}
                        </ul>
                        <div className="contact_words">
                            <h5>HOT LINE</h5>
                            <h3 className="light">400·8167·995</h3>
                        </div>
                    </div>
                </div>
                <div className="Rt_top">
                    <p id="backs">
                        <Link to="/"><img src="images/go_back.jpg" alt="" /></Link>
                    </p>
                    <p className="blocks">
                        <img src="images/gotop.jpg" alt="" />
                    </p>
                </div>

			</div>
		)
	}
}

export default Contact;