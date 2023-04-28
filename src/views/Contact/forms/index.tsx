import React from 'react'

type Props = {}

const Forms = (props: Props) => {

    const onSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <div>

            <form action="" onSubmit={onSubmit}>
                
            </form>

        </div>
    )
}

export default Forms