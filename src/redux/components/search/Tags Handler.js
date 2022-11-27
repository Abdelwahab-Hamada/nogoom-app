import Search from './Search'
import useCurrentState from '../../hooks/useCurrentState'
import { XIcon } from '@heroicons/react/solid'
import { useCreateTagMutation } from '../../services/tags'


const TagsHandler = () => {
  const {tags,addToTags,removeFromTags}=useCurrentState()

  const [createTag,]=useCreateTagMutation()

  const create=async(query)=>{
    const {data}=await createTag({'label':query})
    addToTags(data)
  }

  const tagsHandler=(
    <div
    className='flex flex-wrap gap-1 p-1 border hover:border-black focus:border-black rounded '
    >
        {tags.map(tag =>(
        <span 
        key={tag.id} 
        className='relative border-2 px-4 rounded font-mono flex justify-center items-center  cursor-pointer'
        >
            {tag.label}
            <XIcon 
            onClick={()=>removeFromTags(tag)} 
            className='w-4 bg-white text-red-500 -right-1 absolute -top-1 hover:w-5 duration-300'
            />
        </span>
        ))}
        <Search 
        resultOnClick={addToTags}
        noResultOnClick={create} 
        message='tag not exists'
        noResultMsg='create' />
    </div>
  )

  return tagsHandler
}

export default TagsHandler