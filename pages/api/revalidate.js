export default async function getCurrentTime(res, req) {
  console.log("hello");
  let pass = false;
  try {
    await res.unstable_revalidate("/feature/isg/challenge3");
    pass = true;
  } catch (error) {
    console.log(error);
  }
}
