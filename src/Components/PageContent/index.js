import {AiOutlineUser,AiOutlineCloudUpload,AiOutlineMail} from "react-icons/ai";
import {Typography,Card} from "antd";

function PageContent() {
    return ( 
    <div className="PageContent">
      <Typography.Title level={4}>Choose a plan that's just right for you !</Typography.Title>
      <div className="cards">
      <Card className="card" >
        <Typography.Title level={3}>Basic</Typography.Title>
        <Typography.Title level={5}>$9.99/mo</Typography.Title>
        <Card style={{width:"150px",height:"40px",backgroundColor:'#fff176'}}>
        <Typography.Title level={5} style={{marginTop:"-20px"}} className="Get">Get started →</Typography.Title>
        <hr/>
        </Card>
        <Typography.Title level={5} style={{marginTop:'50px'}}>what you'll get:</Typography.Title>
        <Typography.Title level={5}><AiOutlineUser />Upto 25 users</Typography.Title>
        <Typography.Title level={5}><AiOutlineCloudUpload />Upto 25gb storage</Typography.Title>
        <Typography.Title level={5}><AiOutlineMail />Email Support</Typography.Title>
        <Typography.Title level={5} style={{marginTop:"10px",marginLeft:"20px",borderBottom:"1px solid black",width:"150px"}}>EXPLORE FEATURES</Typography.Title>
        
      </Card>
      <Card className="card" >
        <Typography.Title level={3}>Standard</Typography.Title>
        <Typography.Title level={5}>$99.99/mo</Typography.Title>
        <Card style={{width:"150px",height:"40px",backgroundColor:'#ff5252'}}>
        <Typography.Title level={5} style={{marginTop:"-20px"}} className="Get">Get started →</Typography.Title>
        <hr />
        </Card>
        <Typography.Title level={5} style={{marginTop:'50px'}}>what you'll get:</Typography.Title>
        <Typography.Title level={5}><AiOutlineUser />Upto 50 users</Typography.Title>
        <Typography.Title level={5}><AiOutlineCloudUpload />Upto 60gb storage</Typography.Title>
        <Typography.Title level={5}><AiOutlineMail />Email+chat Support</Typography.Title>
        <Typography.Title level={5} style={{marginTop:"10px",marginLeft:"20px",borderBottom:"1px solid black",width:"150px"}}>EXPLORE FEATURES</Typography.Title>
      </Card>
      <Card className="card" >
        <Typography.Title level={3}>Premium</Typography.Title>
        <Typography.Title level={5}>$199.99/mo</Typography.Title>
        <Card style={{width:"150px",height:"40px",backgroundColor:'#c51162'}}>
        <Typography.Title level={5} style={{marginTop:"-20px"}} className="Get">Get started →</Typography.Title>
        <hr />
        </Card>
        <Typography.Title level={5} style={{marginTop:'50px'}}>what you'll get:</Typography.Title>
        <Typography.Title level={5}><AiOutlineUser />Upto 75 users</Typography.Title>
        <Typography.Title level={5}><AiOutlineCloudUpload />Upto 100gb storage</Typography.Title>
        <Typography.Title level={5}><AiOutlineMail />Email+chat+whatsapp Support</Typography.Title>
        <Typography.Title level={5} style={{marginTop:"10px",marginLeft:"20px",borderBottom:"1px solid black",width:"150px"}}>EXPLORE FEATURES</Typography.Title>
      </Card>
      </div>
      
    </div>
    );
}
export default PageContent;