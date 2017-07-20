import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    constructor(){
        super();
        this.foot={"footer":[{"foot_img":"images/slogan.png","p_first":"如果你有意向，请电话联系我，我们的项执行将会针对你的需求进行初步的需求分析与品牌建议！并配合贵方安排面谈沟通，提供1+1（策划+设计）项目跟进服务！","p_second":"策划部","p_third":"朝阳区CBD大望路阳光100C座10层","p_fourth":"TEL: 400-8167-995","p_fivth":"Email: tech@tianfangbj.com"}],"listAll":[{"list_img":"images/footer_icon_01.png"},{"list_img":"images/footer_icon_02.png"},{"list_img":"images/footer_icon_03.png"}]
        }
    };
	componentDidMount(){
        document.addEventListener('scroll', this.handleScroll.bind(this));
        setTimeout(function(){
          document.getElementById("showsss").style.display="none";
        },900);
    };
    handleScroll=function (e) {
        var h=document.getElementById('home').offsetHeight-document.getElementById('head').offsetHeight;
        if(document.body.scrollTop>=h){
            document.getElementById("head").style.width='100vw';
            document.getElementById("head").style.background='#fff';
            document.getElementById("head").style.boxShadow='0 0 30px rgba(0,0,0,.1)';
            document.getElementById("img").style.marginTop='-80px';
            document.getElementById("title").style.color='#000';
            document.getElementById("nav").className='navs';
            
        }
        else{
            document.getElementById("head").style.width='100vw';
            document.getElementById("head").style.background='transparent';
            document.getElementById("head").style.boxShadow='';
            document.getElementById("img").style.marginTop='';
            document.getElementById("nav").className='nav';
            document.getElementById("title").style.color='#fff';
        }
    };
	render(){
		return(
			<div className="wrap">
				<div className="show_top"></div>
                <div className="show_bottom" id="showsss"></div>
                <div className="home_contact" id="home"></div>

                {/*content*/}
                <div className="main">
                    {/*contact*/}
                    <div className="contact">
                        {this.foot.footer.map(function(foot,i){
                                return <div>
                                        <div className="contact_top">
                                            <img src={foot.foot_img}/>
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


			</div>
		)
	}
}

export default Contact;