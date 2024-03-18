import React from 'react'
import Home from '../Home'

const CaseStudies = () => {
    return (
        <div className=' flex-col items-center justify-center'>
            <div>
                <Home />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }} className='flex-col  items-center '>
                <div style={{ width: '80%' }} className=' flex justify-center gap-20 mt-20'>
                    <div style={{ width: '365px' }} className='text-left ' >
                        <h1 className="  bg-pink-300 text-lg font-bold">Before QuillAudits</h1>
                        <br />
                        <p className="font-semibold">Exploits like reentrancy and front-running can let attackers withdraw extra funds and manipulate transaction timing for unfair gains</p>
                        <br />
                        <p className="font-semibold">Vulnerabilities could allow users to mint CDP tokens or pension shares indefinitely, disrupting the system's economic balance.</p>
                    </div>

                    <div style={{ width: '365px' }} className='text-left ' >
                        <h1 className="  bg-blue-300 text-lg font-bold">After QuillAudits</h1>
                        <br />
                        <p className="font-semibold">Implementation of reentrancy protection mechanisms.</p>
                        <br />
                        <br />
                        <p className="font-semibold">Ensure precision in decimal handling with standard libraries, recalculate accurately, fix logic errors, and secure referral systems against exploitation.</p>
                    </div>


                </div>
            </div>

            <div className='flex-col text-center'>
                <h1 className='text-3xl text-center mt-14 text-blue-900 font-bold'>See how QuillAudits is a trusted partner in <br /> 1000+ Audit stories</h1>
                <button className='py-2 px-4 bg-red-600 bg-gradient-to-r from-blue-600 to-indigo-400 text-white rounded-md flex-col mt-6'>Request an Audit</button>

            </div>

            <div style={{ height: '100vh' }} className='flex justify-center mt-14'>
                <div style={{ width: '70%', }} className=' flex justify-center gap-16'>
                    <div style={{ width: '70%', }}>
                        <p className='para'>Carpe Diem Pension, on Pulse blockchain, redefines retirement with a self-managed, inclusive, globally portable fund. Unique for its token burn mechanism, it ensures a sustainable 4.32% inflation payout. With $143.11k and 41.06% of CDP already burned, it serves 35 users globally. </p>
                        <h1 className='headingSize'>CarpeDiem Pension's Flexible, Blockchain-Enabled Future</h1>
                        <p className='para'>CarpeDiem Pension redefines retirement planning with a unique approach that deviates from traditional pension funds. With no minimum age for retirement, it offers flexibility and freedom, ensuring all genders receive equal treatment. CarpeDiem Pension ensures blockchain transparency, anonymity, and global accessibility, safeguarding pensions during international relocation. Easily transfer pensions to loved ones; share wallet access. Re-deposit payouts for increased future benefits. Importantly, CarpeDiem Pension prioritizes deposit security by avoiding utilizing client funds for internal investments. To become a part of this forward-thinking pension scheme, one simply needs to install and configure a blockchain wallet.</p>
                        <img src='/images/image1.png' className='mb-8' />
                        <h1 className='headingSize'>CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting</h1>
                        <p className='para'>CarpeDiem Pension confronts critical security challenges, including the risks of reentrancy and front-running exploits.Malicious actors may exploit contract vulnerabilities, withdrawing excess funds or manipulating transaction timing for unfair advantages. System faces infinite minting threats, risking economic stability with endless creation of CDP tokens or pension shares.  Addressing these challenges is paramount to safeguarding the integrity and security of CarpeDiem Pension.</p>
                        <img src='/images/image2.png' className='mb-8' />


                        <h1 className='headingSize'>CarpeDiem Pension's Journey Through our Audit Process</h1>
                        <h2 className='point'>1. Information Gathering:</h2>
                        <ul className='list-disc pl-5 list'>
                            <li>Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.</li>
                            <li>Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.</li>
                            <li>Discussed client concerns and specific areas of focus for the audit.</li>
                        </ul>

                        <h2 className='point'>2. Manual Code Review:</h2>
                        <ul className="list-disc">
                            <li className='pl-5 list-none'>Conducted a line-by-line review of the smart contract code, focusing on:
                                <ul className="list-disc pl-5 list">
                                    <li>Vulnerability identification: Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues etc.</li>
                                    <li>Logic flaws: Identifying inconsistencies or unintended behaviors in the code logic.</li>
                                    <li>Tokenomics correctness: Verifying if the code accurately implements the intended economic model and token distribution mechanisms.</li>
                                    <li>Solidity best practices: Compliance with secure coding standards and adherence to established guidelines.</li>
                                </ul>
                            </li>
                        </ul>

                        <h1 className='point' >3. Functional Testing:</h1>
                        <ul className="list-disc pl-5 list">
                            <li>Developed and executed a comprehensive set of test cases covering various user interactions and edge cases.</li>
                            <li>Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.</li>
                            <li>Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors).</li>
                            <li>Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally.</li>
                        </ul>

                        <h1 className='point'>4. Automated Testing:</h1>
                        <ul className="list-disc pl-5 list">
                            <li>Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.</li>
                            <li>Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.</li>
                            <li>Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour.</li>
                        </ul>

                        <h1 className='point'>5. Reporting & Remediation:</h1>
                        <ul className="list-disc pl-5 list">
                            <li>Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.</li>
                            <li>Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.</li>
                            <li>Collaborated with the CDP team to prioritize and address the identified issues.</li>
                            <li>Conducted additional verification testing after vulnerability fixes were implemented.</li>
                        </ul>

                        <h1 className='headingSize'>QuillAudits' Strategic Approach to CDP Security Audits</h1>
                        <p className='para'>We prioritize threat modeling based on platform-specific risks. Security-first, we identify and mitigate vulnerabilities beyond functionality testing. Using white-box and black-box tests, we conduct thorough vulnerability assessments. Maintaining transparency, we communicate openly with the CDP team. Emphasizing clarity, we present actionable insights for efficient issue resolution.</p>

                        <h1 className='headingSize'>Comprehensive Audit Discoveries and Remediation Strategies</h1>
                        <p className='para'>Throughout the audit process, we unearthed a total of 33 issues, spanning from minor concerns to critical vulnerabilities. Among these, some of the critical issues identified were: Here's how we remediated them :</p>

                        <h1 className='pointAlpha'>1. Unauthorized Claim/Compound:</h1>
                        <ul>
                            <li >

                                <ol className='listAlpha'>
                                    <li>Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time.</li>
                                </ol>
                            </li>
                        </ul>

                        <h1 className='pointAlpha'>2. Precision Loss in mintCDP():</h1>
                        <ul>
                            <li>

                                <ol className='listAlpha'>
                                    <li>Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function.</li>
                                </ol>
                            </li>
                        </ul>

                        <h1 className='pointAlpha'>3. Multiplication Accuracy:</h1>
                        <ul>
                            <li>

                                <ol className='listAlpha'>
                                    <li>Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations.</li>
                                </ol>
                            </li>
                        </ul>

                        <h1 className='pointAlpha'>4. Incorrect Share Allocation:</h1>
                        <ul>
                            <li>

                                <ol className='listAlpha'>
                                    <li>The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources.</li>
                                </ol>
                            </li>
                        </ul>

                        <h1 className='pointAlpha'>5. Logic Error in Referral Handling:</h1>
                        <ul>
                            <li>

                                <ol className='listAlpha'>
                                    <li>A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system.</li>
                                </ol>
                            </li>
                        </ul>

                        <h1 className='pointAlpha'>6. Referral Exploitation:</h1>
                        <ul>
                            <li>

                                <ol className='listAlpha'>
                                    <li>Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity.</li>
                                </ol>
                            </li>
                        </ul>

                        <h1 className='headingSize mt-8'>Remediation & Impact:</h1>
                        <p className='para'>All identified vulnerabilities were addressed by the CDP team, significantly enhancing the smart contract's security posture. Key improvements include   </p>
                        <ul className="list-disc pl-5 list">
                            <li>Implementation of reentrancy protection mechanisms.</li>
                            <li>Accurate handling of decimal values using established libraries or best practices.</li>
                            <li>Revised calculations with proper scaling factors</li>
                            <li>Fixing logic errors to ensure deposits and waiting periods are enforced.</li>
                            <li>Addressing referral system vulnerabilities to prevent abuse.</li>
                        </ul>

                        <p><strong>Embed this tweet :- </strong> <a href="https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20">https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20</a></p>
                        <p className='para mt-6'>CDP smart contract audit revealed and fixed critical vulnerabilities, safeguarding funds and ensuring platform stability. This underscores the need for proactive security in blockchain projects, crucial for financial asset management. Through audits and issue resolution, CDP reinforces platform security, bolstering user trust.</p>

                        <img src='/images/image3.png' className='mt-24'/>    

                    </div>


                    <div style={{ width: '30%' }} class="hover:animate-background rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]" >
                        <div className='bg-white rounded-lg pl-6 h-36 '>
                            <div>
                                <h1 className='text-gray-400 pt-3'>Headquaters</h1>
                                <h1 className='font-semibold mb-4'>Switzerland</h1>
                            </div>

                            <div >
                                <h1 className='text-gray-400'>Chain</h1>
                                <h1 className='font-semibold'>Pulse blockchain</h1>
                            </div>
                        </div>


                    </div>
                </div>
                
            </div>
        </div >
    )
}

export default CaseStudies