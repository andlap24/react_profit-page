import React from 'react';
import './UserInfo.scss';

import ProfileAvatar from '../../images/users/user2.png';
import EditIcon from '../../images/icons/edit-icon.svg';

import users from '../../api/users.json';

export const UserInfo = () => (
  users.map(user => (
    user.id === 2
      ? (
        <div className="profile">
          <div className="profile__header">
            <img className="profile__img" src={ProfileAvatar} alt="" />
            <h3 className="profile__name">{user.name}</h3>
            <p className="profile__status">{user.position}</p>
            <img
              className="profile__edit-icon"
              src={EditIcon}
              alt="edit user icon"
            />
          </div>

          <div className="profile__info">
            <div className="profile__info-item">
              <h4>Email</h4>
              <p className="profile__contact">{user.email}</p>
            </div>

            <div className="profile__info-item">
              <h4>Mobile</h4>
              <p className="profile__contact">{user.mobile}</p>
            </div>

            <div className="profile__info-item">
              <h4>Skill Level</h4>
              <p className="profile__contact">{user.level}</p>
            </div>

            <div className="profile__info-item">
              <h4>Paid out limit</h4>
              <div className="profile__progress">
                <div className="profile__progress-bar" />
                <p className="profile__progress-limit">
                  <span>$580</span>
                  /$750
                </p>
              </div>
            </div>

            <div className="profile__info-item">
              <h4>Bio</h4>
              <p className="profile__bio">{user.bio}</p>
            </div>

            <div className="profile__info-item">
              <h4>Skills</h4>
              <div className="profile__tags tags">
                {user.tags.map(tag => (
                  <div className="tags__tag">{tag}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
      : null
  ))
);
