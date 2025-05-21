import Chatsection from '@/components/chatsection'
import Groups from '@/components/groups'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import React from 'react'

const Chat = () => {
return (
<div>
<Navbar/>
<div className='flex gap-2'>
    
<Sidebar/>
<Chatsection/>
<Groups/>
</div>
</div>
)
}

export default Chat