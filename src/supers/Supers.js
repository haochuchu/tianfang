import React, { Component } from 'react';
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './supers.css';
import Design from './../design/Design';
import './../design/design.css';
import $ from 'jquery';

class Supers extends Component {
    constructor(){
        super();
        this.state={
            supers:[]
        };
        this.foot={"footer":[{"foot_img":"images/slogan.png"}],"listAll":[{"list_img":"images/footer_icon_01.png"},{"list_img":"images/footer_icon_02.png"},{"list_img":"images/footer_icon_03.png"}]
        };
        
    };
    componentDidMount(){
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/supers",
            async:"true",
            success:function(pp){
                console.log(pp)
                this.setState({
                    supers:pp
                })
                $(".db").click(function (){
                    (document.body.scrollTop=0) || (document.documentElement.scrollTop=0);
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
                    <Route path="/Design" component={Design}></Route>
                    <Route exact path="/supers" render={()=>(
                        <div className="wrap">
                            <div className="show_top"></div>
                            <div className="show_bottom" id="show_news"></div>
                            <div className="home_system" id="home"></div>
                            {/*content*/}
                            <div className="fixed_news">
                                <h2 className="system_word">SI形象设计</h2>
                                <ul className="system_box">
                                         {this.state.supers.map(function(per,i){
                                                return <Link key={i}  to={`/Design?${per.id}`}><li className="db">
                                                    <div className="system_top">
                                                        <img src={per.super_img}/>
                                                    </div>
                                                    <div className="system_bot">
                                                        <h5>{per.super_word}</h5>
                                                        <span>{per.super_new}</span>
                                                    </div>
                                                </li></Link>
                                            })}
                                </ul>
                                <div className="contact">
                                        {this.foot.footer.map(function(foot,i){
                                                return (
                                                        <div className="contact_top">
                                                            <img src={foot.foot_img}/>
                                                        </div>
                                                )
                                        })};
                                        <ul className="contact_ul">
                                            {this.foot.listAll.map(function(list,i){
                                                return <li><a><img src={list.list_img}/></a></li>
                                            })}
                                        </ul>
                                        <div className="contact_word">
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
                    )}>
                </Route>
            </div>
        </Router>

        )
    }
}

export default Supers;