
import { placeholderService } from '@/services/placeholderService';
import React from 'react';
import Header from '../components/header';



export async function getStaticPaths() {
    const res = await placeholderService.getAll()
    const paths = res.map((user) => ({
        params: { id: user.id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const post = await placeholderService.getDataById(params.id)
    const comments = await placeholderService.getCommentByPostId(params.id)
    const data = { post, comments }
    return { props: { data } }
}

const Page = ({ data }) => {

    return (
        <div
            className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
        >
            <Header />
            <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div className="flex flex-col items-center sm:items-start rounded-lg w-full max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-min">
                        <a href="/" className="text-blue-500 dark:text-blue-300">Back</a>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-5 sm:items-start p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 w-full max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">{data.post.title}</h1>
                    <p className="mb-8 text-gray-800 dark:text-gray-300">{data.post.body}</p>
                </div>
                <div className="flex flex-col items-center sm:items-start p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 w-full max-w-3xl mx-auto mt-5">
                    <div className="w-full text-gray-800 dark:text-gray-200 p-5 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
                        <div className="flex flex-col space-y-4">
                            {data.comments.length > 0 ? (
                                data.comments.map((comment) => (
                                    <div key={comment.id} className="p-4 border-b border-gray-200 dark:border-gray-700">
                                        <p className="font-semibold text-gray-800 dark:text-gray-200">{comment.name}</p>
                                        <p className="text-gray-700 dark:text-gray-400">{comment.body}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-600 dark:text-gray-400">No comments available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
 