import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = ({ cards }) => {
    return (
        <SkeletonTheme baseColor="#777" highlightColor="#444">
        {Array(cards).fill(0).map((_,i ) => (
                <div className='card-skeleton task-box-child' key={i}>
                    <div className='task-each'>
                        <Skeleton count={2} style={{marginBlock: '0.2rem'}}/>
                    </div>
                </div>
        ))
        }

        </SkeletonTheme>

    )
}

export default CardSkeleton