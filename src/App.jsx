import Home from './layout/Home';
import About from './section/About';
import Project from './section/Project';
import Experience from './section/Experience';
import Contact  from './section/Contact';
import  {Routes, Route} from 'react-router-dom';
import PdfViewer from './section/PdfViewer';
export default function App (){
  return (
  <div className="min-h-screen overflow-x-hidden">
  
   <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/about' element = {<About/>}/>
    <Route path='/portfolio' element = {<PdfViewer/>}/>
    <Route path='/project' element = {<Project/>}/>
    <Route path='/experience' element = {<Experience/>}/>
    <Route path='/contact' element= {<Contact/>}/>
   </Routes>
   
   </div>
)}

