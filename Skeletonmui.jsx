function Skeletonmui(){
    return(
        <>
        <Box>
  <Skeleton variant="text" width={200} />
  <Skeleton variant="rectangular" width={300} height={150} />
  <Skeleton variant="circular" width={50} height={50} />
</Box>

        </>
    )
}
export default Skeletonmui;