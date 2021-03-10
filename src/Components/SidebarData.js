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
      cName: 'nav-text',
      owner: 'admin'
    },
    {
      title: 'View & Edit Uploaded',
      path: '/viewuploaded',
      icon: <ImIcons.ImBooks />,
      cName: 'nav-text',
      owner: 'admin'
    },
    
    {
      title: 'View Notes',
      path: '/viewnotes',
      icon: <ImIcons.ImBooks />,
      cName: 'nav-text',
      owner: 'student'
    },
    {
      title: 'Check Your Email',
      path: '/viewprofile',
      icon: <FaIcons.FaUserGraduate />,
      cName: 'nav-text',
      owner: 'student'
    }
  ];