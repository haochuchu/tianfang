import React, { Component } from 'react';
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './prize.css';
import './prize_phone.css';
import $ from 'jquery';

class Prize extends Component {
    constructor(){
        super();
        this.state={
            prize:[]
        };
         this.foot={"footer":[{"foot_img":"images/slogan.png"}],"listAll":[{"list_img":"images/footer_icon_01.png"},{"list_img":"images/footer_icon_02.png"},{"list_img":"images/footer_icon_03.png"}]
        }
    };
	componentDidMount(){
        var id=window.location.href.split('?')[1];
            $.ajax({
                url:'http://localhost:8100/tianfang/xiangqing2',
                type:'post',
                data:{id:id},
                success:function(e){
                    this.setState({
                        prize:e
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
			<div className="wrap">
				<div className="show_top"></div>
                <div className="show_bottom" id="show_news"></div>
                <div className="home_news" id="home"></div>
                {/*content*/}
                    <div className="prizes_box">
                          <h2 className="prize_h2">NEWS</h2>
                          <p>Jun 08,2017</p>  
                        <div className="prize_box">
                            {this.state.prize.map(function(dd,i){
                                return <div>
                                    <h3 className="h_word">{dd.prize_word}</h3>
                                    <div className="prize_design">
                                        <p>{dd.con}</p>
                                        <ul className="printAll">
                                            {dd.more.split('?').map(function(oo,i){
                                            return <li className="print_one"><img src={'http://localhost:8100/images/'+oo} alt="" /></li>
                                            })}
                                            
                                        </ul>    
                                    </div>    
                                </div>
                            })}
                        </div>
                        <div className="contact_box">
                            {this.foot.footer.map(function(foot,i){
                                    return (
                                            <div className="contact_tops">
                                                <img src={foot.foot_img}/>
                                            </div>
                                    )
                            })};
                            <ul className="contact_uls">
                                {this.foot.listAll.map(function(list,i){
                                    return <li className="li_box"><a><img src={list.list_img}/></a></li>
                                })}
                            </ul>
                            <div className="contact_word">
                                <h5>HOT LINE</h5>
                                <h3 className="lights">400·8167·995</h3>
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

export default Prize;