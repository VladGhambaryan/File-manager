import './App.css';
import './buttons.css';

import {connect, useSelector} from "react-redux";
import React from "react"

import {FileModal} from "./fileModal/fileModal";
import Navbar from "./navbar/navbar";
import {FolderModal} from "./folderModal/folderModal";
import {Link, NavLink, useLocation, useSearchParams} from "react-router-dom";
import {ContainerView} from "./containerViewFolders/ContainerView";





function App() {

    const location = useLocation()
    const breadCrumbs = location.pathname.split('/')
    const fileModal = useSelector(state => state.fileReducer.fileModal)
    const folderModal = useSelector(state => state.fileReducer.folderModal)
    const container = useSelector(state => state.fileReducer.container)
    const parentId = container?.map(item=>item?.parentId?.slice('/',-1))



    return (
        <>

            <div className="App">
                <div className='bread-crumbs'>
                    {breadCrumbs?.map((item,index)=>{
                        const test = `${breadCrumbs.slice(0,index+1).join('/')}`
                        if(test === ''){
                            return null
                        }
                        if(index === breadCrumbs.length-1){
                            return <span>/{item}</span>
                        }
                        return(
                            <>
                            <span>/</span>
                            <Link className='crumb' to={test}>{item}</Link>
                            </>
                        )
                    })}
                    </div>
                <Navbar parentId={parentId}/>
                {folderModal && <FolderModal/>}
                {fileModal && <FileModal/> }
                <ContainerView location={location}/>

            </div>



        </>
    );


}

export default connect()(App)
