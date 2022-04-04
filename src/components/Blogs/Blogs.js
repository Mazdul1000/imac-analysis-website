import { AcademicCapIcon } from '@heroicons/react/solid';
import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className="text-6xl mt-5">Read Our Blogs</h1>

            <div className='bg-slate-200 text-[#1D1D1F] w-[90%] mx-auto text-left p-10 font-mono rounded mt-[50px]'>
                <p className='text-2xl font-bold flex h-full items-center'><span><AcademicCapIcon className='w-[30px] h-[30px] text-slate-700 mr-2'></AcademicCapIcon></span> <span>What is Context API ?</span></p>
                <p className='text-xl font-semibold mt-3'><span className='text-green-700 text-2xl'>Answer:</span> The Context Api is a component structure that help us to share data values across all level of the application without passing props through every level. <br />
                    On the react component based project, we pass props for sending data values from parent to child component or even child component. This is called props drilling. But when we work in big projects , it become so messy because a components doesn't need a particular data but it has to pass the data. Here ,Context Api help us to set any particular data values  like a global variable ,that can be accessible by any components without passing props through every level of the components tree.</p>
            </div>
            <div className='bg-slate-200 text-[#1D1D1F] w-[90%] mx-auto text-left p-10 font-mono rounded mt-[50px]'>
                <p className='text-2xl font-bold flex h-full items-center'><span><AcademicCapIcon className='w-[30px] h-[30px] text-slate-700 mr-2'></AcademicCapIcon></span> <span>What is Semantic Tags ?</span></p>
                <p className='text-xl font-semibold mt-3'><span className='text-green-700 text-2xl'>Answer:</span> When we use &lt;div&gt; tag or  &lt;span&gt; tag in html , we don't know actually what is the purpose of these element or what will they contain. But when we talk about HTML5 tags like  &lt;article&gt; , &lt;header&gt;, &lt;footer&gt; , the tag telling us the purpose of the tag. So, we can say that , semantic tag tells us the purpose of an element or what type of content it may contain.By semantic tags browser can understand the meaning of the content . And this also helps search engines to find the required information .Even it is a good practice for accessibility. When a screen reader or any kind of assistive device scans a web page, it gets information about the Document Object Model(DOM). In these case , Semantic tags helps the screen reader to detect the specific content.</p>
            </div>
        </div>
    );
};

export default Blogs;