import Tags from './Tags';

const Home=()=>{    
    const content=(
            <div className='h-full overflow-auto scrollbar '>
                <Tags title='popular' />
                <Tags title='recent' />
            </div>
        )
    return content
}

export default Home
