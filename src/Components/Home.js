import React from 'react'
import { SlArrowDown } from "react-icons/sl";

const navName = [
    {
        name: 'Services', Logo: SlArrowDown
    },
    {
        name: 'Pricing', Logo: ''
    },
    {
        name: 'Our Audits', Logo: ''
    },
    {
        name: 'Toop', Logo: SlArrowDown
    },
    {
        name: 'Resources', Logo: SlArrowDown
    },
    {
        name: 'Refer-Earn-Secure', Logo: ''
    },

]

const Home = () => {
    return (
        <div style={{ backgroundImage: "url('images/bgImage.png')", height: "100vh", backgroundSize: 'cover' }}>
            <div className='flex py-6 px-16 justify-between'>
                <div className=' text-white font-bold flex items-center gap-2'>
                    {/* <img src='/images/logo.png'/> */}
                    <img src='/images/logo.png' width={'45px'} height={'45px'} />
                    <h1 className='text-3xl'>QuillAudits</h1>
                </div>

                <div className='flex items-center'>
                    <div class=" lg:block bg-transparent ">
                        <ul class="inline-flex space-x-8">
                            {navName.map((elem, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        class="text-sm text-white font-semibold text-gray-800 hover:p-2 hover:rounded-3xl hover:bg-white flex items-center gap-2"
                                    >
                                        {elem.name}
                                        {elem.Logo && <elem.Logo />}
                                    </a>

                                </li>
                            ))}

                        </ul>
                    </div>

                </div>

                <div>
                    <button className='py-2 px-4 bg-red-600 bg-gradient-to-r from-blue-600 to-indigo-400 text-white rounded-md'>Request an Audit</button>
                </div>
            </div>

            <div className='flex items-center gap-6 justify-center '>
                <div className='relative ' style={{zIndex: '1'}}>
                    <img src='/images/carpediem.png' width={'550px'} height={'520px'}/>
                </div>
                
                <div className='bg-white top-36 p-2 rounded-md' style={{zIndex: '2',  position: 'absolute'}}>
                    <img src='/images/CDPension.png'/>
                </div>  

                <div className='text-white flex-row '>
                    <h1 className='text-4xl font-bold'>Securing Trust : Boosting<br/> Security and Strengthening <br/> Trust at Carpe Diem Pension</h1>
                    <br/>
                    <p>QuillAudits enhances Carpe Diem Pension by<br/> addressing 33 vulnerabilities on the Pulse blockchain,<br/> boosting security and user trust in digital pensions.</p>
                </div>
            </div>

        </div>
    )
}

export default Home