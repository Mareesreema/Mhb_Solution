import React from 'react'
import './Team.css'
import Team1 from '../assets/images/team1.png'
import Team2 from '../assets/images/team2.png'
import Team3 from '../assets/images/team3.png'
import Social from '../assets/images/Social_media.png'
import Team4 from '../assets/images/team4.png'
export default function Team() {
  return (
   <>
   <div className="team" id='team'>
    <div className="head-title">
        <p className="titles">Our Team</p>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="team-members">
                    <img src={Team1} className='img-fluid team-img' alt="" />
                    <p className='team-role'>CEO</p>
                    <img src={Social} className='img-fluid' alt="" />
                </div>
            </div>
            <div className="col-md-3">
                <div className="team-members">
                    <img src={Team2} className='img-fluid team-img' alt="" />
                    <p className='team-role'>Story Script Writer</p>
                    <img src={Social} className='img-fluid' alt="" />

                </div>
            </div>
            <div className="col-md-3">
                <div className="team-members">
                    <img src={Team3} className='img-fluid team-img' alt="" />
                    <p className='team-role'>Vfx Artist</p>
                    <img src={Social} className='img-fluid' alt="" />

                </div>
            </div>
            <div className="col-md-3">
                <div className="team-members">
                    <img src={Team4} className='img-fluid team-img' alt="" />
                    <p className='team-role'>Content Creator</p>
                    <img src={Social} className='img-fluid' alt="" />

                </div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}
