"use client";
import { Button, Result } from "antd";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const ErrorLayout = dynamic(() => import("@/layouts/ErrorLayout"), {
  ssr: false,
});  
  const NotFound = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <ErrorLayout>
      <Result
        style={{ height: "100%", margin: "auto", backgroundColor: "inherit" }}
        status="404"
        title="404"
        subTitle={`ไม่พบ URL ${pathname} ของหน้าเว็บไซต์นี้`}
        extra={
          <>
            <Button type="primary" variant="solid" color="danger" onClick={() => router.back()}>
              ย้อนกลับ
            </Button>
            <Button type="primary" onClick={() => router.replace("/")}>
              กลับไปหน้าแรก
            </Button>
          </>
        }
      />
    </ErrorLayout>
  );
};

export default NotFound;
