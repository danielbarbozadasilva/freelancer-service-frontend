import styled from 'styled-components'

export const StyledSearch = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  background-color: #473f57;
  color: white;

  .container {
    width: 100%;
    max-width: 1400px;
    display: flex;
    align-items: center;

    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 30px;

      h1 {
        font-size: 50px;

        span {
          font-style: italic;
          font-weight: 300;
        }
      }

      .search {
        background-color: white;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;

        .searchInput {
          display: flex;
          align-items: center;
          gap: 10px;

          img {
            width: 20px;
            height: 20px;
            margin: 10px;
          }

          input {
            border: none;
            outline: none;

            &::placeholder {
              color: gray;
            }
          }
        }

        button {
          width: 120px;
          height: 50px;
          border: none;
          background-color: #2a2438;
          color: white;
          align-self: flex-end;
          cursor: pointer;
        }
      }

      .popular {
        display: flex;
        align-items: center;
        gap: 10px;

        span {
          width: max-content;
        }

        button {
          width: max-content;
          color: white;
          border: 1px solid white;
          padding: 5px 10px;
          border-radius: 20px;
          background-color: transparent;
          font-size: 14px;
        }
      }
    }

    .right {
      flex: 1;
      display: none;
    }
  }

  @media (min-width: 768px) {
    .container {
      .right {
        display: block;
        height: 100%;
        img {
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
  @media (max-width: 940px) {
    .container {
      .right {
         img {
          display: none!important;
        }
      }
    }
  }
`;