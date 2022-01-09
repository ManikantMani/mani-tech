import React, {useState} from 'react';
import "./index.css";


const Contact = () => {

  const [data, setData] = useState({
    fullname:"",
    phone:"",
    email: "",
    msg:"",
  });

  let name, value;
  const getUserData = (event) => {
      name = event.target.name;
      value = event.target.value;

      setData({ ...data, [name]: value });
  };

  // firebase code bellow /for send user data in dataBase

  const postData = async (e) => {
    e.preventDefault("");

    const{fullname, phone, email, msg } = data;
    
    const res = await fetch(
        "https://reactcontactform-9397a-default-rtdb.firebaseio.com/reactcontactform.json",
         {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
              fullname,
              phone,
              email,
              msg,
                
            }),
        }
    );
    alert(`My name is ${data.fullname}. My mobile number is ${data.phone}. My email address is ${data.email}. Here is what I want to say ${data.msg}`);
};


  return (
    <>
      <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                Name
                </label>
                <input 
                type="text" 
                class="form-control" 
                id="exampleFormControlInput1" 
                name = "fullname"
                onChange = {getUserData}
                value = {data.fullname}
                autoComplete='off'
                required
                placeholder="Enter Your Name..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                Phone No.
                </label>
                <input 
                type="number" 
                class="form-control" 
                id="exampleFormControlInput1" 
                name = "phone"
                onChange = {getUserData}
                value = {data.phone}
                autoComplete='off'
                required
                placeholder="Enter Your Phone No..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                Email address
                </label>
                <input 
                type="email" 
                class="form-control" 
                id="exampleFormControlInput1" 
                name = "email"
                onChange = {getUserData}
                value = {data.email}
                autoComplete='off'
                required
                placeholder="Enter Your Email Address..." />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                Message
                </label>
                <textarea 
                class="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
                name = "msg"
                onChange = {getUserData}
                value = {data.msg}
              ></textarea>
              </div>
              <div className = "col-12">
                <button 
                className = "btn" 
                type = "submit"
                onClick={postData}
                >
                Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
