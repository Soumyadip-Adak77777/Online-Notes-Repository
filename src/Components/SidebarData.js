import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as GoIcons from "react-icons/go";

export const SidebarData = [
    {
      title: 'Upload Notes',
      path: '/uploadnotes',
      icon: <GoIcons.GoCloudUpload />,
      cName: 'nav-text'
    },
    {
      title: 'Create Repository',
      path: '/createrepo',
      icon: <IoIcons.IoMdBuild />,
      cName: 'nav-text'
    },
    {
      title: 'View Uploaded',
      path: '/viewuploaded',
      icon: <ImIcons.ImBooks />,
      cName: 'nav-text'
    },
    {
      title: 'Edit Repository',
      path: '/editrepo',
      icon: <IoIcons.IoMdSettings />,
      cName: 'nav-text'
    },
    {
      title: 'View Notes',
      path: '/viewnotes',
      icon: <ImIcons.ImBooks />,
      cName: 'nav-text'
    },
    {
      title: 'View Profile',
      path: '/viewprofile',
      icon: <FaIcons.FaUserGraduate />,
      cName: 'nav-text'
    }
  ];