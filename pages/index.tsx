import type { NextPage } from 'next'
import Head from 'next/head'
import prismac from '../lib/prisma'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ReactImageFallback from 'react-image-fallback'
import { shuffleArray } from "../lib/instance-array-tools"

const Home: NextPage = ({ general, niche }: any) => {
    const [active, setActive] = useState(0)
    const [variants, setVariants] = useState({
        initial: { x: '0%', '--divHeight': `0px` },
        animate: { x: '-55%', '--divHeight': `0px` },
    })
    
    const generalDiv = React.useRef<HTMLDivElement>()
    const nicheDiv = React.useRef<HTMLDivElement>()
    
    useEffect(() => {
        setVariants({
            initial: {
                x: '0%',
                '--divHeight': `${ generalDiv.current.offsetHeight }px`,
            },
            animate: {
                x: '-55%',
                '--divHeight': `${ nicheDiv.current.offsetHeight }px`,
            },
        })
        
        window.addEventListener('resize', () => {
            setVariants({
                initial: {
                    x: '0%',
                    '--divHeight': `${ generalDiv.current.offsetHeight }px`,
                },
                animate: {
                    x: '-55%',
                    '--divHeight': `${ nicheDiv.current.offsetHeight }px`,
                },
            })
        })
        
        shuffleArray(general)
        shuffleArray(niche)
    }, [])
    
    return (
        <div>
            <Head>
                <title>The Trans Fediverse</title>
                <link
                    rel='icon'
                    href='/favicon.ico'
                />
            </Head>
            <br />
            <div className='flex flex-col space-y-4'>
                <div className='card bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='text-2xl card-title'>
                            What is the Fediverse?
                        </h2>
                        <p>
                            The "fediverse" is a decentralised social media network
                            made up of many servers running different software that
                            all talk to each other.

                            Examples of this software include Mastodon, Misskey,
                            Pleroma, and many more.

                            This site is a hub of instances (servers) on the
                            fediverse that are focused on trans, gender diverse,
                            and non-binary communities, as well as instances that
                            are welcoming and friendly to trans and gender diverse
                            people.
                        </p>
                        <p>
                            There is no ownership of the wider Fediverse, just
                            instances. All instances are operated by real people
                            and not faceless companies (or at least the ones
                            listed on this site). Which means you are moderated
                            by other real people and server costs are managed
                            by your instance admins. Or if you are nerdy enough,
                            you can host your own and federate with the rest of
                            us!
                        </p>
                    </div>
                </div>
                <div className='card bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='text-2xl card-title'>Getting Started</h2>
                        <p>
                            Joining is simple and easy, just pick a server from
                            below to get started. Or if you are nerdy like
                            stated before set up your own server... but I still
                            think it is best to start out on an existing
                            instance first. You will be able to move easily with
                            all your followers if you want.
                        </p>
                        <p>
                            <strong>Note:</strong> You may feel like you should
                                                   join a LARGE instance, but you should keep in mind
                                                   the larger the instance, the most costly it is on
                                                   your instance owner. Also, it doesn&apos;t matter
                                                   what instance you are on, as you can follow and
                                                   people can follow you, no matter which instance you
                                                   join. We are all interconnected!
                        </p>
                    </div>
                </div>
                <div className='card bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <p className='text-2xl'>Tools To Get You Going!</p>
                        <p className='font-bold py-4'>
                            Find Your Friends on the Fediverse
                        </p>
                        <div className='px-2 flex flex-wrap gap-2'>
                            <a
                                href='https://fedifinder-backup.glitch.me'
                                className='btn btn-primary normal-case text-lg'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className='fa-brands fa-twitter'></i>
                                <i className='ml-2 fa-solid fa-arrow-right'></i>{ ' ' }
                                <i className='ml-2 fa-brands fa-mastodon'></i>
                                <span className='ml-2'>Fedifinder</span>
                            </a>
                            <a
                                href='https://twitodon.com'
                                className='btn btn-primary normal-case text-lg'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className='fa-brands fa-twitter'></i>
                                <i className='ml-2 fa-solid fa-arrow-right'></i>{ ' ' }
                                <i className='ml-2 fa-brands fa-mastodon'></i>
                                <span className='ml-2'>Twitodon</span>
                            </a>
                        </div>
                        <p className='font-bold py-4'>Recomended Apps</p>
                        <div className='px-2 flex flex-wrap gap-2'>
                            <a
                                href='https://apps.apple.com/us/app/toot/id1229021451'
                                className='btn btn-primary normal-case text-lg'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className='fa-brands fa-apple mr-2'></i>{ ' ' }
                                Toot! (Paid)
                            </a>
                            <a
                                href='https://apps.apple.com/us/app/metatext/id1523996615?mt=8'
                                className='btn btn-primary normal-case text-lg'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className='fa-brands fa-apple mr-2'></i>{ ' ' }
                                Metatext
                            </a>
                            <a
                                href='https://fedilab.app'
                                className='btn btn-primary normal-case text-lg'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className='fa-brands fa-android mr-2'></i>{ ' ' }
                                Fedilab
                            </a>
                            <a
                                href='https://tusky.app'
                                className='btn btn-primary normal-case text-lg'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className='fa-brands fa-android mr-2'></i>{ ' ' }
                                Tusky
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card bg-base-100 shadow-xl overflow-x-clip h-max'>
                    <div className='card-body'>
                        <h2 className='text-2xl card-title'>
                            Fediverse Instances
                        </h2>
                        <p className='italic text-sm'>
                            To Opt-In To Being Displayed Here, please fill out{ ' ' }
                            <Link
                                href='/add-instance'
                                className='underline'
                            >
                                This Form
                            </Link>
                        </p>
                        <br />
                        <ul className='tabs w-full grid grid-cols-2'>
                            <div
                                className='tooltip tooltip-primary w-full'
                                data-tip='Instances open to furries of any kind with no specific topic'
                            >
                                <li
                                    key={ 0 }
                                    className={ `text-2xl tab tab-bordered h-fit w-full ${
                                        0 === active && 'tab-active'
                                    }` }
                                    onClick={ () => setActive(0) }
                                >
                                    General Instances
                                </li>
                            </div>
                            <div
                                className='tooltip tooltip-primary w-full'
                                data-tip='Furry friendly instances with a focus on one or more topics'
                            >
                                <li
                                    key={ 1 }
                                    className={ `text-2xl tab tab-bordered h-fit w-full ${
                                        1 === active && 'tab-active'
                                    }` }
                                    onClick={ () => setActive(1) }
                                >
                                    Focused Instances
                                </li>
                            </div>
                        </ul>
                        <br />
                        <div className=''>
                            <motion.div
                                key={ 0 }
                                variants={ variants }
                                initial='initial'
                                animate={ 1 === active ? 'animate' : 'initial' }
                                className='grid grid-cols-2 gap-[10%] w-[220%]'
                                style={ { height: 'var(--divHeight)' } }
                            >
                                <div
                                    className={ `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-min` }
                                    ref={ generalDiv }
                                >
                                    { niche.map(
                                        (data: {
                                            id: string
                                            title: any
                                            thumbnail: any
                                            description: any
                                            short_description: any
                                            registrations: any
                                            approval_required: any
                                            uri: any
                                            user_count: any
                                            nsfwflag: any
                                        }) => (
                                            <div
                                                key={ data.id }
                                                className='card card-compact bg-base-300 shadow-xl'
                                            >
                                                <figure>
                                                    <ReactImageFallback
                                                        src={ data.thumbnail }
                                                        fallbackImage='./img/fedi_placeholder.png'
                                                        initialImage='./img/fedi_placeholder.png'
                                                        className='max-h-52 w-full object-cover rounded-md pointer-events-none'
                                                        alt={ data.title }
                                                        onLoad={ () =>
                                                            updateVariants()
                                                        }
                                                    />
                                                </figure>
                                                <div className='card-body'>
                                                    <h2 className='card-title text-2xl text-center self-center'>
                                                        { data.title }
                                                    </h2>
                                                    <div className='divider my-0'></div>
                                                    <p className='text-base'>
                                                        { data.short_description !=
                                                        'null' &&
                                                        data.short_description
                                                            .length > 0
                                                            ? data.short_description.replace(
                                                                /(<([^>]+)>)/gi,
                                                                ''
                                                            )
                                                            : data.description !=
                                                            'null' &&
                                                            data.description
                                                                .length > 0
                                                                ? data.description.replace(
                                                                    /(<([^>]+)>)/gi,
                                                                    ''
                                                                )
                                                                : 'No description' }
                                                    </p>
                                                    <div className='divider my-0'></div>
                                                    <div className='card-actions justify-evenly'>
                                                        <div className='text-lg w-min italic basis-full flex flex-rows items-center justify-center'>
                                                            <i className='fa-solid fa-key mr-4'></i>
                                                            <div className='flex flex-wrap flex-rows w-min justify-center'>
                                                                <span className='whitespace-nowrap w-min'>
                                                                    { data.registrations
                                                                        ? 'Registrations Open'
                                                                        : 'Registrations Closed' }
                                                                </span>
                                                                <span className='whitespace-nowrap w-min'>
                                                                    { data.approval_required
                                                                        ? 'with Approval Required'
                                                                        : '' }
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className='tooltip text-lg'
                                                            data-tip='Members'
                                                        >
                                                            <i className='fa-solid fa-users'></i>{ ' ' }
                                                            { data.user_count }
                                                        </div>
                                                        <div
                                                            className='tooltip text-lg'
                                                            data-tip='Content Rules'
                                                        >
                                                            <i className='fa-solid fa-user-shield'></i>{ ' ' }
                                                            { data.nsfwflag }
                                                        </div>
                                                        <a
                                                            href={
                                                                data.uri.includes(
                                                                    'https'
                                                                )
                                                                    ? data.uri
                                                                    : 'https://' +
                                                                    data.uri
                                                            }
                                                            className='btn btn-primary normal-case text-xl w-full mt-2'
                                                            target='_blank'
                                                            rel='noreferrer'
                                                        >
                                                            Visit Instance
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    ) }
                                </div>
                                <div
                                    className={ `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-min` }
                                    ref={ nicheDiv }
                                >
                                    { general.map(
                                        (data: {
                                            id: string
                                            title: any
                                            thumbnail: any
                                            description: any
                                            short_description: any
                                            registrations: any
                                            approval_required: any
                                            uri: any
                                            user_count: any
                                            nsfwflag: any
                                        }) => (
                                            <div
                                                key={ data.id }
                                                className='card card-compact bg-base-300 shadow-xl'
                                            >
                                                <figure>
                                                    <ReactImageFallback
                                                        src={ data.thumbnail }
                                                        fallbackImage='./img/fedi_placeholder.png'
                                                        initialImage='./img/fedi_placeholder.png'
                                                        className='max-h-52 w-full object-cover rounded-md pointer-events-none'
                                                        alt={ data.title }
                                                        onLoad={ () =>
                                                            updateVariants()
                                                        }
                                                    />
                                                </figure>
                                                <div className='card-body'>
                                                    <h2 className='card-title text-2xl text-center self-center'>
                                                        { data.title }
                                                    </h2>
                                                    <div className='divider my-0'></div>
                                                    <p className='text-base'>
                                                        { data.short_description !=
                                                        'null' &&
                                                        data.short_description
                                                            .length > 0
                                                            ? data.short_description.replace(
                                                                /(<([^>]+)>)/gi,
                                                                ''
                                                            )
                                                            : data.description !=
                                                            'null' &&
                                                            data.description
                                                                .length > 0
                                                                ? data.description.replace(
                                                                    /(<([^>]+)>)/gi,
                                                                    ''
                                                                )
                                                                : 'No description' }
                                                    </p>
                                                    <div className='divider my-0'></div>
                                                    <div className='card-actions justify-evenly'>
                                                        <div className='text-lg w-min italic basis-full flex flex-rows items-center justify-center'>
                                                            <i className='fa-solid fa-key mr-4'></i>
                                                            <div className='flex flex-wrap flex-rows w-min justify-center'>
                                                                <span className='whitespace-nowrap w-min'>
                                                                    { data.registrations
                                                                        ? 'Registrations Open'
                                                                        : 'Registrations Closed' }
                                                                </span>
                                                                <span className='whitespace-nowrap w-min'>
                                                                    { data.approval_required
                                                                        ? 'with Approval Required'
                                                                        : '' }
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className='tooltip text-lg'
                                                            data-tip='Members'
                                                        >
                                                            <i className='fa-solid fa-users'></i>{ ' ' }
                                                            { data.user_count }
                                                        </div>
                                                        <div
                                                            className='tooltip text-lg'
                                                            data-tip='Content Rules'
                                                        >
                                                            <i className='fa-solid fa-user-shield'></i>{ ' ' }
                                                            { data.nsfwflag }
                                                        </div>
                                                        <a
                                                            href={
                                                                data.uri.includes(
                                                                    'https'
                                                                )
                                                                    ? data.uri
                                                                    : 'https://' +
                                                                    data.uri
                                                            }
                                                            className='btn btn-primary normal-case text-xl w-full mt-2'
                                                            target='_blank'
                                                            rel='noreferrer'
                                                        >
                                                            Visit Instance
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    ) }
                                </div>
                            </motion.div>
                            <br />
                            <p className='italic text-sm text-right'>
                                <Link
                                    href='/report-instance'
                                    className='underline'
                                >
                                    Report Instance
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
    function updateVariants() {
        setVariants({
            initial: {
                x: '0%',
                '--divHeight': `${ generalDiv.current.offsetHeight }px`,
            },
            animate: {
                x: '-55%',
                '--divHeight': `${ nicheDiv.current.offsetHeight }px`,
            },
        })
    }
}

// This gets called on every request
export async function getStaticProps() {
    // Interface pre-requisites
    interface ServerData {
        cache: any
    }
    
    // Fetch data from external API
    const generalInstance = await prismac.instances.findMany({
        where: { type: 'general', verified: true, banned: false },
    })
    const nicheInstance = await prismac.instances.findMany({
        where: { type: 'niche', verified: true, banned: false },
    })
    
    // Build the array from the list of servers
    let generalInstances = []
    for (let i of generalInstance) {
        let serverQuery = await prismac.instanceData.findFirst({
            where: { instance_id: i.id },
        })
        let serverData = JSON.parse(serverQuery.cache)
        generalInstances.push({
            id: i.id,
            title: serverData.title,
            thumbnail: serverData.thumbnail,
            short_description:
                serverData.short_description !== undefined
                    ? serverData.short_description
                    : 'null',
            description: serverData.description,
            registrations: serverData.registrations,
            approval_required: serverData.approval_required,
            user_count: serverData.stats.user_count,
            nsfwflag: i.nsfwflag,
            uri: i.uri,
        })
    }
    
    // Build the array from the list of servers
    let nichelInstances = []
    for (let i of nicheInstance) {
        let serverQuery: ServerData = await prismac.instanceData.findFirst({
            where: { instance_id: i.id },
        })
        let serverData = JSON.parse(serverQuery.cache)
        nichelInstances.push({
            id: i.id,
            title: serverData.title,
            thumbnail: serverData.thumbnail,
            short_description:
                serverData.short_description !== undefined
                    ? serverData.short_description
                    : 'null',
            description: serverData.description,
            registrations: serverData.registrations,
            approval_required: serverData.approval_required,
            user_count: serverData.stats.user_count,
            nsfwflag: i.nsfwflag,
            uri: i.uri,
        })
    }
    
    // Pass data to the page via props
    return {
        props: {
            general: generalInstances,
            niche: nichelInstances,
        },
        revalidate: 60,
    }
}

export default Home
