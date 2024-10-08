import React from 'react'
import ReactLogo from "../../../assets/tech-stack/react.png"
import ReactNativeLogo from "../../../assets/tech-stack/react-native.png"
import ReduxLogo from "../../../assets/tech-stack/redux.png"
import SpringbootLogo from "../../../assets/tech-stack/springboot.png"
import NodejsLogo from "../../../assets/tech-stack/nodejs.png"
import PhpLogo from "../../../assets/tech-stack/php.png"
import LaravelLogo from "../../../assets/tech-stack/laravel.png"
import JavaLogo from "../../../assets/tech-stack/java.png"
import JavascriptLogo from "../../../assets/tech-stack/javascript.png"
import VuejsLogo from "../../../assets/tech-stack/vue.png"
import BootstrapLogo from "../../../assets/tech-stack/bootstrap.png"
import MongodbLogo from "../../../assets/tech-stack/mongodb-icon-1.png"
import MysqlLogo from "../../../assets/tech-stack/mysql-logo.png"
import RedisLogo from "../../../assets/tech-stack/redis.png"
import DynamodbLogo from "../../../assets/tech-stack/DynamoDB.png"
import TechStackItem from './TechStackItem'

export default function TechStack() {
    const techStackData = [
        {logo:ReactLogo, name:"React"},
        {logo:ReactNativeLogo, name:"React Native"},
        {logo:ReduxLogo, name:"Redux"},
        {logo:SpringbootLogo, name:"Springboot"},
        {logo:NodejsLogo, name:"Nodejs"},
        {logo:PhpLogo, name:"Php"},
        {logo:LaravelLogo, name:"Laravel"},
        {logo:JavaLogo, name:"Java"},
        {logo:JavascriptLogo, name:"Javascript"},
        {logo:VuejsLogo, name:"Vuejs"},
        {logo:BootstrapLogo, name:"Bootstrap"},
        {logo:MongodbLogo, name:"MongoDB"},
        {logo:MysqlLogo, name:"MySQL"},
        {logo:RedisLogo, name:"Redis"},
        {logo:DynamodbLogo, name:"DynamoDB"}
    ]
  return (
    <section className="tech-stack">
        <div className="ts1">
            <h2 data-aos="fade-up" data-i18n-key="our-tech-stack">Our Technology Stack</h2>
            <p data-aos="fade-up" data-aos-delay="200" data-i18n-key="section-header3">We are concerned about the security of our customers. That's why we always keep updating and use best technologies in our products.</p>
        </div>
        <div className="ts2" data-aos="fade-in">
        {
            techStackData.map((item, index) => (
                <TechStackItem logo={item.logo} name={item.name} key={index}/>
            ))
        }
        </div>


    </section>
  )
}
