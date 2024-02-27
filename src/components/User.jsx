import { Component } from 'react';
import { FaGithub } from "react-icons/fa";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserInfo: {}
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://api.github.com/users/R3MODAS");
            if (!response.ok) {
                const err = response.status;
                throw new Error(err);
            } else {
                const json = await response.json();
                this.setState({ UserInfo: json })
            }
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const { UserInfo } = this.state;

        const { name, avatar_url: userImg, html_url: link, location } = UserInfo;

        return (
            <div className='bg-[url("/images/aboutbg.jpg")] bg-cover w-full pt-24 bg-center'>

                <div className='container mx-auto text-center text-white flex flex-col justify-center items-center min-h-screen custom-shadow'>
                    <h2 className="font-GrotBlack text-2xl md:text-4xl pt-5 pb-3 lg:pb-5">Purpose of Pincode 😉</h2>
                    <p className='font-GrotMed px-4 w-full lg:p-0 lg:w-[800px] text-base md:text-xl mx-auto'>Pincode is a place where you can get all sorts of Restaurants where you can order anything, anytime you desire 🔥. This works on Swiggy's Live Data so you will get all the features of the Food Ordering App 😁</p>

                </div>

            </div>
        )
    }

}

export default User