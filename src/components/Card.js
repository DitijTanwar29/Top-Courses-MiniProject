import React from 'react'
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
import {toast} from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if(likedCourses.includes(course.id)){
            //course was already liked
            setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id) ) );  //cid is hsowing the clements of previous
            toast.warning("Like removed");
        }
        else{
            //this course was not liked i.e pehle se like nahi hai ye course 
            //insert this course in liked courses i.e insert krna h ye course liked courses me
            if(likedCourses.length ===0 ) {
                setLikedCourses([course.id]);
            }
            else {
                //non empty pehle se
                setLikedCourses( (prev) => [...prev , course.id]);
            }
            toast.success("Liked Successfully");

        }
    }
  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
        <div className='relative'>
            <img src={course.image.url}></img>
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-15px] grid place-items-center'>
            <button on={clickHandler}>
                {
                    likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>) 
                }
            </button>
        </div>
    </div>

        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                    {
                        course.description.length>100 ? 
                        (course.description.substr(0,100)) + "..." :
                        (course.description)
                    }
            </p>
        </div>

    </div>
  )
}

export default Card