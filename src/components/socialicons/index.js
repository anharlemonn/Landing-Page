import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofiles } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofiles.twitter && (
          <li>
            <a href={socialprofiles.twitter} target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofiles.github && (
          <li>
            <a href={socialprofiles.github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofiles.facebook && (
          <li>
            <a href={socialprofiles.facebook} target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofiles.linkedin && (
          <li>
            <a href={socialprofiles.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofiles.youtube && (
          <li>
            <a href={socialprofiles.youtube} target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofiles.twitch && (
          <li>
            <a href={socialprofiles.twitch} target="_blank" rel="noreferrer">
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
