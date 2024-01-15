import React from 'react'



const Users = () => {
    const arr = [1, 2, 3, 4,5]
    return (
        <section className='tableClass'>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Profile Pic</th>
                            <th>Role</th>
                            <th>Since</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map(i => (
                                <tr key={i}>
                                    <td>ID</td>
                                    <td>Akash</td>
                                    <td>
                                        <img style={{borderRadius:'100px',width:"35px",height:"35px"}} src='https://conferenceoeh.com/wp-content/uploads/profile-pic-dummy.png' alt='User'/>
                                    </td>
                                    <td>Admin</td>
                                    <td>23-03-2023</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </section>
    )
}

export default Users