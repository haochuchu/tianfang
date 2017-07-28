import React, { Component } from 'react';
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './news.css';
import './news_phone.css';
import Prize from './../newsChild/Prize';
import $ from 'jquery';

class News extends Component {
    constructor(){
        super();
       this.state={
            prize:[]
       };
        this.foot={"footer":[{"foot_img":"images/slogan.png"}],"listAll":[{"list_img":"images/footer_icon_01.png"},{"list_img":"images/footer_icon_02.png"},{"list_img":"images/footer_icon_03.png"}]
        }
    };
	componentDidMount(){
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/prize",
            async:"true",
            success:function(pp){
                this.setState({
                    prize:pp
                })
                $(".top_new").click(function (){
                    (document.body.scrollTop=0) || (document.documentElement.scrollTop=0);
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
        if(document.body.scrollTop>=0){
            document.getElementById("head").style.width='100vw';
            document.getElementById("head").style.background='#fff';
            document.getElementById("head").style.boxShadow='0 0 30px rgba(0,0,0,.1)';
            document.getElementById("img").style.marginTop='-80px';
            document.getElementById("nav").className='navs';
            
        }
    };
	render(){
		return(
            <Router>
                <div>
                    <Route path="/Prize" component={Prize}></Route>
                    <Route exact path="/News" render={()=>(
        			<div className="wrap">
        				<div className="show_top"></div>
                        <div className="show_bottom" id="show_news"></div>
                        <div className="home_news" id="home"></div>
                        {/*content*/}
                        <div className="fixed_news">
                            <h2>NEWS</h2>
                            <div className="prize">
                                 <ul>
                                {this.state.prize.map(function(pp,i){
                                return  <Link key={i}  to={`/Prize?${pp.id}`} className="top_new">
                                <li>
                                    <div className="prize_word">
                                    	<h6>{pp.prize_title}</h6>
                                    	  <h4>{pp.prize_word}</h4>
                                    	<span>{pp.prize_new}</span>
                                    </div>
                                    <div className="prize_lore">
                                        <img src={pp.prize_img}/>
                                    </div>
                                </li>
                                </Link>
                                })}
                                </ul>
                            </div>
                                {/*contact*/}
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
               
                )}></Route>
            </div>
            </Router>
		)
	}
}

export default News;