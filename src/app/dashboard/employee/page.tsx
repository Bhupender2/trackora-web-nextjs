import PageContainer from '@/components/layout/page-container';

export default function Employee() {
  return (
    <PageContainer>
      <div className='space-y-6'>
        <div>
          <h1 className='flex items-center gap-2 text-3xl font-bold tracking-tight'>
            Exclusive Area
          </h1>
          <p className='text-muted-foreground'>Employee page here</p>
        </div>
      </div>
    </PageContainer>
  );
}
