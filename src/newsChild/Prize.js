import React, { Component } from 'react';
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './prize.css';
import $ from 'jquery';

class Prize extends Component {
    constructor(){
        super();
         this.foot={"footer":[{"foot_img":"images/slogan.png"}],"listAll":[{"list_img":"images/footer_icon_01.png"},{"list_img":"images/footer_icon_02.png"},{"list_img":"images/footer_icon_03.png"}]
        }
    };
	componentDidMount(){
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
                    <div className="fixed_prize">
                          <h2>NEWS</h2>
                          <p>Jun 08,2017</p>  
                        <div className="prize_box">
                            <div className="top_prize">
                                <h3>德国IF大奖</h3>
                            </div>
                            <div className="prize_design">
                                <p> iF常被称为「产品设计界的奥斯卡奖」，不过跟「奥斯卡」不同的是：iF颁发的这些金奖可都是设计实力的体现，没有乌龙喔。赶紧来看看这些这75 款被授予金奖全球的顶尖设计作品吧 </p>
                                <ul className="printAll">
                                    <li className="print_one"><img src="images/20170329042821899.jpg" alt=""/></li>
                                    <li className="print_two"><img src="images/20170329042831857.jpg" alt=""/></li>
                                    <li className="print_two"><img src="images/20170329042840343.jpg" alt=""/></li>
                                    <li className="print_two"><img src="images/20170329042847692.jpg" alt=""/></li>
                                    <li className="print_two"><img src="images/20170329042853413.jpg" alt=""/></li>
                                    <li className="print_two"><img src="images/20170329042901623.jpg" alt=""/></li>
                                    <li className="print_one"><img src="images/20170329042909890.jpg" alt=""/></li>
                                    <li className="print_one"><img src="images/20170329042922803.jpg" alt=""/></li>
                                    <li className="print_three"><img src="images/20170329043018448.jpg" alt=""/></li>
                                    <li className="print_four"><img src="images/20170329042943859.jpg" alt=""/></li>
                                    <li className="print_one"><img src="images/20170329043050940.jpg" alt=""/></li>
                                    <li className="print_five"><img src="images/20170329043100243.jpg" alt=""/></li>
                                    <li className="print_six"><img src="images/20170329043109268.jpg" alt=""/></li>
                                    <li className="print_six"><img src="images/20170329043122630.jpg" alt=""/></li>
                                    <li className="print_six"><img src="images/20170329043134671.jpg" alt=""/></li>
                                    <li className="print_one"><img src="images/20170329043152177.jpg" alt=""/></li>
                                    <li className="print_one"><img src="images/20170329043158490.jpg" alt=""/></li>
                                </ul>
                            </div>
                        </div>
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
		)
	}
}

export default Prize;