import { openModal, closeModal } from '@/features/theme'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StepProgressBar from './StepProgressBar'
import Color from './Color'
import BackgroundBox from './BackgroundBox'
import { AiOutlineClose } from 'react-icons/ai'
import theme from './theme'


const Modal = () => {
    const dispatch = useDispatch()
    const [selected, setSelected] = useState('#1D9BF0')
    const isModalOpen = useSelector(state => state.theme.modal)
    const color = useSelector((state) => state.theme.color)
    const fontSize = useSelector((state) => state.theme.fontSize)
    const [mode, setMode] = useState('Default')

    const { colors, background } = theme()

    return (
        <>
            {/* launch Modal buttom  */}
            <button
                type="button"
                onClick={() => dispatch(openModal())}
                style={{ background: color }}
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xl font-medium uppercase leading-normal text-white  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
                Launch Twitter Theme
            </button>

            {/*  Modal   */}
            <div className={`fixed  mx-auto h-screen left-0 top-0 z-[1055] ${isModalOpen ? 'block' : 'hidden'}  overflow-y-auto overflow-x-hidden outline-none bg-neutral-800/70  w-full flex items-center justify-center`}>
                <div className="relative w-full !max-w-[600px]  my-6 mx-auto h-min lg:h-auto md:h-auto">
                    <div className={`translate   duration-300 h-full ${isModalOpen ? 'translate-y-0' : 'translate-y-full'} ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none p-6 focus:outline-none">
                            <AiOutlineClose className='absolute top-4 right-4 text-2xl' onClick={() => dispatch(closeModal())} />
                            <h1 className='font-bold text-2xl text-center' style={{ color: color, fontSize: fontSize.xxl }}>Customize your view</h1>
                            {/*  Change Font  */}
                            <div className='mt-4'>
                                <p className='text-sm font-bold text-gray-600 py-2'>Font size</p>
                                <div className='flex items-center px-4 justify-between bg-gray-100 p-3 gap-2 rounded-2xl'>
                                    <span className='text-xs'>Aa</span>
                                    <div className='w-[82%]'>
                                        <StepProgressBar />
                                    </div>
                                    <span className='text-2xl'>Aa</span>
                                </div>
                            </div>

                            {/*  Color Change  */}
                            <div className='mt-4'>
                                <p className='text-sm font-bold text-gray-600 py-2'>Color</p>
                                <div className='flex items-center px-8 justify-between bg-gray-100 p-3 gap-2 rounded-2xl'>
                                    {colors.map(color => (
                                        <Color key={color} color={color} selected={selected} setSelected={setSelected} />
                                    ))}
                                </div>
                            </div>

                            {/*  Background Change  */}
                            <div className='mt-4 w-full'>
                                <p className='text-sm font-bold text-gray-600 py-2'>Background</p>
                                <div className='flex items-center px-3 justify-between bg-gray-100 p-3 gap-2 rounded-2xl w-full'>
                                    <BackgroundBox textcolor="#15202b" mode="Default" bgColor={background[0]} selected={mode === 'Default'} setMode={setMode} backgroundColor="#ffffff" />
                                    <BackgroundBox textcolor="#ffffff" mode="Dim" bgColor={background[1]} selected={mode === 'Dim'} setMode={setMode} backgroundColor="#15202b" />
                                    <BackgroundBox textcolor="#ffffff" mode="Lights out" bgColor={background[2]} selected={mode === 'Lights out'} setMode={setMode} backgroundColor="#000000" />
                                </div>
                            </div>

                            {/* submit button */}
                            <div className='mt-4 flex justify-center' onClick={() => dispatch(closeModal())}>
                                <button className='px-4 py-1.5 text-white font-semibold rounded-full' style={{ backgroundColor: color }}>Done</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal