import React from 'react';
import "./header.css";

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="Facebook-logo.png" alt="fb-logo"/>
            </div>
            <div className="header_input">
                <SearchIcon/>
                <input placeholder="Search Facebook" type="text" />
            </div>

            <div className="header_center">
                <div className="header_option header_option--active">
                    <HomeIcon fontSize="large" /> 
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
               
            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar />
                    <h4>vikash yadav</h4>
                </div>
                <AddIcon fontSize="large" />
                <ForumIcon fontSize="large" />
                <NotificationsActiveIcon fontSize="large" />
                <ExpandMoreIcon fontSize="large" />

            </div>
            
        </div>
    )
}
