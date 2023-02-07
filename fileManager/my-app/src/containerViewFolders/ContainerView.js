import React, {useEffect, useRef, useState} from 'react'
import './folder.css'
import './file.css'
import {useDispatch, useSelector} from "react-redux";
import {editFileModalAction, editFolderModalAction, isChecked} from "../redux/actions";

import {NavLink, useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {current} from "@reduxjs/toolkit";

const img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Folder_open_alt_font_awesome.svg/512px-Folder_open_alt_font_awesome.svg.png'
const imgFile = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Document_icon_%28the_Noun_Project_27904%29.svg/100px-Document_icon_%28the_Noun_Project_27904%29.svg.png'

export const ContainerView = () => {

    const [change, setChange] = useState(false)
    const navigate = useLocation().pathname
    const container = useSelector((state) => state.fileReducer.container)
    const selectedItem = useSelector    ((state) => state.fileReducer.selectedItem)
    console.log(selectedItem,'selectedItem')
    // const [selectedItem,setSelectedItem] = useState(null)
    const dispatch = useDispatch()
    const nav = useNavigate()
    const ref = useRef()
    console.log(change)
    const handleChange = (e)=>{
        console.log(current)
    }
    const handleClick = (item) => {
        console.log(navigate, 'navigate')
        if (navigate === '/') {
            nav(`${navigate}${item}`)
        } else {
            nav(`${navigate}/${item}`)
        }
    }

    return (

        <div style={{display: "flex", alignContent: "stretch"}}>

            {container?.map(item => {
                if (item.name === 'folder' && (!item.parentId || item.parentId === navigate)) {
                    return (

                        <div key={item.id} className='folders' >

                            <div className={selectedItem === item.id ? 'selected' : 'folder'} onClick={(e) => {
                                if (selectedItem === item.id) {
                                        // dispatch(isChecked({
                                        //     id: item.id
                                        // }))
                                } else {
                                    dispatch(isChecked({
                                        id: item.id
                                    }))

                                }
                            }
                                // onAltKey = ()=>{

 //                           }
                            // {
                            //     dispatch(isChecked({
                            //         id: item.id,
                            //         isChecked: !item.isChecked
                            //     }))
                            // }

                            } >
                                <img className='img'
                                     src={`${img}`}
                                     onClick={()=>editFolderModalAction({
                                         open: false,
                                    value: item.value,
                                    id: item.id})} /> </div>
                                {/*<NavLink to={`${item?.parentId === '/' ? '' : item.parentId}/${item.value}`}*/}
                                {/*         style={{textDecoration: 'none', color: 'black'}}>*/}
                                {/*    <div>.{item.value}</div>*/}
                                {/*</NavLink>*/}
                                <button
                                    style={{textDecoration: 'none', color: 'black'}}
                                    onClick={() => handleClick(item.value)}
                                >
                                    <div >{item.value}</div>

                            </button>

                        </div>
                    )
                } else if (item.name === "file" && (!item.parentId || item.parentId === navigate)) {
                    return (
                        <div key={item.id} className='file'>

                                <div className={item.isChecked ? 'selected' : 'file'} onClick={(e) => {
                                    console.log(e,'onclick')
                                    dispatch(isChecked({
                                        id: item.id,
                                        isChecked: !item.isChecked
                                    }))
                                }
                                }>
                                <img className='img'
                                     src={`${imgFile}`}  onDoubleClick={(e) => dispatch(editFileModalAction({
                                    open: false,
                                    value: item.value,
                                    content: item.content,
                                    id: item.id
                                }))}/>
                                </div>
                                    <div>{item.value}</div>
                        </div>
                    )
                }else {
                    return null
                }

            })}


        </div>


    )
}

