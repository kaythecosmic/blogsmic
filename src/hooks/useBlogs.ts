import useSwr from 'swr'
import fetcher from '@/lib/fetcher'

const useBlogs = () => {
    const { data, error, isLoading } = useSwr('api/blogs', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    return {
        data, error, isLoading
    }
}

export default useBlogs
