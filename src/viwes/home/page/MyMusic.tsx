const MyMusic = () => {
    // 模拟用户数据
    const myPlaylists = [
        {id: 1, name: '我的最爱', count: 45},
        {id: 2, name: '跑步歌单', count: 32}
    ];

    const recentPlays = [
        {id: 1, title: '夜空中最亮的星', artist: '逃跑计划'},
        {id: 2, title: '起风了', artist: '吴青峰'}
    ];

    return (
        <div className="ml-5 mt-3">
            {/* 我的歌单模块 */}
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">创建的歌单</h2>
                <div className="flex flex-wrap gap-5">
                    {myPlaylists.map(playlist => (
                        <div key={playlist.id} className="w-48 p-3 bg-gray-100 rounded-lg">
                            <div className="h-32 bg-blue-100 rounded-md mb-2" />
                            <h3 className="font-medium">{playlist.name}</h3>
                            <p className="text-sm text-gray-500">{playlist.count}首</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 最近播放 */}
            <div>
                <h2 className="text-xl font-bold mb-4">最近播放</h2>
                <div className="space-y-3">
                    {recentPlays.map(song => (
                        <div key={song.id} className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded">
                            <div className="w-10 h-10 bg-gray-200 rounded" />
                            <div>
                                <p className="font-medium">{song.title}</p>
                                <p className="text-sm text-gray-500">{song.artist}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default MyMusic;