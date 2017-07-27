import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './case.css';
import $ from 'jquery';

class Case extends Component {
    constructor(){
        super();
        this.state={
            pic_list:[]
        };
        this.foot={"footer":[{"foot_img":"images/slogan.png"}],"listAll":[{"list_img":"images/footer_icon_01.png"},{"list_img":"images/footer_icon_02.png"},{"list_img":"images/footer_icon_03.png"}]
        };

    };
	componentDidMount(){
            var id=window.location.href.split('?')[1];
            $.ajax({
                url:'http://localhost:8100/tianfang/xiangqing',
                type:'post',
                data:{id:id},
                success:function(e){
                    this.setState({
                        pic_list:e
                    })
                }.bind(this)
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
                <div className="home_case" id="home"></div>

                {/*content*/}
                <div className="Main">
                    {this.state.pic_list.map(function(dd,i){
                        return <div>
                            <h1>{dd.after}</h1>
                            <div className="more_img">
                                {dd.more.split('?').map(function(oo,i){
                                    return <img src={'http://localhost:8100/images/'+oo} alt="" />
                                })}
                            </div>    
                        </div>
                    })}
                    {/*<h1>巴斯资本</h1>
                    <div className="more_img">
                        <img src="images/20170327120736980.jpg" alt="" />
                        <img src="images/20170327120737821.jpg" alt="" />
                        <img src="images/20170327120737615.jpg" alt="" />
                        <img src="images/20170327120738192.jpg" alt="" />
                        <img src="images/20170327120738806.jpg" alt="" />
                        <img src="images/20170327120739112.jpg" alt="" />
                    </div>*/}
                    {/*contact*/}
                        <div className="contact">
                            {this.foot.footer.map(function(foot,i){
                                    return (
                                            <div className="contact_top">
                                                <img src={foot.foot_img}/>
                                            </div>
                                    )
                            })}
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
		)
	}
}

export default Case;