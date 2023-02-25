function confirm({ logout }) {
    Modal.confirm({
      title: 'Confirm your Logout',
      centered: true,
      okText: 'Logout',
      icon: <LogoutOutlined />,
      cancelButtonProps: {
        danger: true,
      },
      content: (
        <div>
            hullo
        </div>
      ),
      onOk: () => {
        // your  function
      },
    });
  }